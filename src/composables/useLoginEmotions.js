import { ref, computed, onMounted } from "vue";

const emotionsList = ref([
  { name: "happiness", color: "green" },
  { name: "sadness", color: "blue" },
  { name: "fear", color: "purple-7" },
  { name: "disgust", color: "orange-7" },
  { name: "anger", color: "red" },
  { name: "surprise", color: "yellow-6" },
]);

const currentImage = ref("anger");
const previousImages = ref([]);

export function useLoginEmotions() {
  const changeCurrentImage = (emotionName) => {
    const emotion = emotionsList.value.find((e) => e.name === emotionName);
    currentImage.value = emotion ? emotionName : currentImage.value;
  };

  const randomizeImage = () => {
    let newEmotion;
    do {
      const randomIndex = Math.floor(Math.random() * emotionsList.value.length);
      newEmotion = emotionsList.value[randomIndex].name;
    } while (newEmotion === currentImage.value || previousImages.value.includes(newEmotion));

    currentImage.value = newEmotion;
    previousImages.value.push(newEmotion);

    if (previousImages.value.length === emotionsList.value.length) {
      previousImages.value = [];
    }

    setTimeout(randomizeImage, 3000);
  };

  onMounted(() => {
    randomizeImage();
  });

  const currentEmotion = computed(() => {
    return emotionsList.value.find((e) => e.name === currentImage.value);
  });

  return {
    emotionsList,
    currentImage,
    changeCurrentImage,
    currentEmotion,
  };
}
