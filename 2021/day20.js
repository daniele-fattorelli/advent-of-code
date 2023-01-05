
const ImageEnhancementAlgorithm = [ 1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0 ];
const InputImage = [ [1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1], [0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0], [1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0], [1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1], [1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0], [0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0], [0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0], [0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1], [1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0], [0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0], [1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0], [1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1], [1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0], [0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0], [1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1], [0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0], [0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1], [0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1], [0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1], [0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0], [1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1], [1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1], [0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0], [1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0], [1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1], [0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0], [0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0], [0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1], [1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1], [0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0], [0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1], [1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0], [0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1], [0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1], [0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0], [1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1], [1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1], [1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1], [1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1], [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1], [1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0], [0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0], [0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1], [0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1], [1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0], [1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1], [1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0], [1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1], [1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0], [0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1], [1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1], [0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0], [0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1], [1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0], [0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0], [1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0], [1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1], [1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1], [0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1], [0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1], [0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0], [0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1], [0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0], [0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0], [0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1], [1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1], [0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1], [1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0], [0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0], [0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1], [1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1], [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1], [0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0], [1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1], [0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1], [1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1], [0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0], [1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1], [1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1], [1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0], [0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0], [1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1], [1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1], [0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1], [0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0], [1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1], [1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1], [0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1], [1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1], [0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0], [0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1], [1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0], [0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1], [0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0], [1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0], [0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1], [1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0], [1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1], [0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0], [1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0] ];

console.log(ImageEnhancementAlgorithm);
console.log(InputImage);

var OutputImage = [];
var Enhancements = 50;
var Offset = Enhancements + 10;
var Result = 0;

for (let x = 0; x < InputImage.length + Offset*2; x++) {
    OutputImage[x] = [];
    for (let y = 0; y < InputImage[0].length + Offset*2; y++) {
        OutputImage[x][y] = (x < Offset) || (x > InputImage.length + Offset - 1) || (y < Offset) || (y > InputImage[0].length + Offset - 1) ? 0 : InputImage[x-Offset][y-Offset];
    }
}
console.log(OutputImage);

function Enhance(OldImage) {

    let NewImage = []
    for (let y = 0; y < OldImage.length; y++) {
        NewImage[y] = [];
        for (let x = 0; x < OldImage[0].length; x++) {

            let n =     (x == 0                    || y == 0                 ? OldImage[0][0] : OldImage[y-1][x-1]) * 256
                    +   (                             y == 0                 ? OldImage[0][0] : OldImage[y-1][x  ]) * 128
                    +   (x == OldImage[0].length-1 || y == 0                 ? OldImage[0][0] : OldImage[y-1][x+1]) * 64
                    +   (x == 0                                              ? OldImage[0][0] : OldImage[y  ][x-1]) * 32
                    +   (                                                                       OldImage[y  ][x  ]) * 16
                    +   (x == OldImage[0].length-1                           ? OldImage[0][0] : OldImage[y  ][x+1]) * 8
                    +   (x == 0                    || y == OldImage.length-1 ? OldImage[0][0] : OldImage[y+1][x-1]) * 4
                    +   (                             y == OldImage.length-1 ? OldImage[0][0] : OldImage[y+1][x  ]) * 2
                    +   (x == OldImage[0].length-1 || y == OldImage.length-1 ? OldImage[0][0] : OldImage[y+1][x+1]) * 1;

            NewImage[y][x] = ImageEnhancementAlgorithm[n];

        }
    }
    return NewImage;

}

OutputImage = Enhance(OutputImage);
OutputImage = Enhance(OutputImage);

for (let x = 0; x < OutputImage.length; x++) for (let y = 0; y < OutputImage[0].length; y++) Result += OutputImage[x][y];

console.log('Part 1 answer: ' + Result);

Result = 0;

for (let i = 0; i < 48; i++) OutputImage = Enhance(OutputImage);

for (let x = 0; x < OutputImage.length; x++) for (let y = 0; y < OutputImage[0].length; y++) Result += OutputImage[x][y];

console.log('Part 2 answer: ' + Result);
