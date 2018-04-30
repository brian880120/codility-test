var input = "my.song.mp3 11b \n" +
"greatSong.flac 1000b \n" +
"note3.txt 10200b \n" +
"video.mp4 200b \n" +
"game.exe 100b \n" +
"photo.jpg 300b \n" +
"movie.mkv 10000b";

var formatMapper = {
    music: ['mp3', 'flac'],
    images: ['jpg', 'png'],
    movies: ['mkv', 'mp4']
};

function solutions(input) {
    var result = '';
    var resultJson = {
        music: 0,
        images: 0,
        movies: 0,
        other: 0
    };
    var dataJson = {};
    var lines = input.split('\n');
    lines.forEach((line) => {
        var item = line.split(' ');
        dataJson[item[0]] = item[1].substring(0, item[1].length-1);
    });

    for (fileFormatKey in dataJson) {
        var format = fileFormatKey.split('.').pop();
        var hasFound = false;
        for (formatKey in formatMapper) {
            if (formatMapper[formatKey].includes(format)) {
                resultJson[formatKey] += parseInt(dataJson[fileFormatKey], 10);
                hasFound = true;
            }
        }
        if (!hasFound) {
            resultJson.other += parseInt(dataJson[fileFormatKey], 10);
        }
    }

    for (fileType in resultJson) {
        result += fileType + ' ' + resultJson[fileType]+ 'b' + '\n';
    }
    return result;
}

var result = solutions(input);
console.log(result);
