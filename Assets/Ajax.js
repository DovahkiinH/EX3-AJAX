$(document).ready(function () {

    var apiKey = 'f33cd318f5135dba306176c13104506a';

    $('#search-button').click(function () {
        var searchTerm = $('#search-input').val();
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + searchTerm;

        $.ajax({
            url: url,
            method: 'GET',
            success: function (data) {

                var searchResults = data.results;


                var resultsList = '<h2>Résultats de recherche :</h2>';
                for (var i = 0; i < searchResults.length; i++) {
                    resultsList += `
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="https://image.tmdb.org/t/p/w200/${searchResults[i].poster_path}" class="card-img" alt="${searchResults[i].title}">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${searchResults[i].title}</h5>
                                        <p class="card-text">Date de sortie : ${searchResults[i].release_date}</p>
                                        <p class="card-text">Note utilisateurs : ${searchResults[i].vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }


                $('#search-results').html(resultsList);
            },
            error: function (error) {
                console.log('Erreur lors de la récupération des données : ' + error);
            }
        });
    });
});