const PlayerAudioBasic = ({ txtPlayerAudio, srcLinkAudio }) => {
  return (
    <figure className="gap-4 flex-col justify-start items-center">
      <figcaption>{txtPlayerAudio}</figcaption>
      <audio className="py-2" controls src={srcLinkAudio}></audio>
      <a href={srcLinkAudio}> Download audio </a>
    </figure>
  );
};

export default PlayerAudioBasic;
