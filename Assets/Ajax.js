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


                        var resultsList = '<h2>Résultats de recherche :</h2><ul>';
                        for (var i = 0; i < searchResults.length; i++) {
                            resultsList += '<li>' + searchResults[i].title + '</li>';
                        }
                        resultsList += '</ul>';


                        $('#search-results').html(resultsList);
                    },
                    error: function (error) {
                        console.log('Erreur lors de la récupération des données : ' + error);
                    }
                });
            });
        });
