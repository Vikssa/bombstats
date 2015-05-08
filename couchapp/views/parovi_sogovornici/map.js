function(doc) {
    соговорници = [];
    if(doc.разговори && Array.isArray(doc.разговори)) {
        doc.разговори.forEach(function(разговор) {
            var прв, втор;
            if (разговор.соговорници[0].иницијали < разговор.соговорници[1].иницијали) {
                прв = разговор.соговорници[0];
                втор = разговор.соговорници[1];
            }
            else {
                прв = разговор.соговорници[1];
                втор = разговор.соговорници[0];
            }
            emit(прв.име + " " + прв.презиме + " " + " и " + " " +
                 втор.име + " " + втор.презиме, 1);
        });
    }
}