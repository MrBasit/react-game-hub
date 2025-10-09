import useGameTrailer from "../hooks/useGameTrailer";

interface Prop {
  slug: string;
}
const GameTrailer = ({ slug }: Prop) => {
  let { data: trailers, isLoading, error } = useGameTrailer(slug);
  let firstTrailer = trailers?.results[0];

  if (isLoading) return null;

  if (error) throw error;

  if (!firstTrailer) return null;

  return <video src={firstTrailer.data[480]} autoPlay muted controls></video>;
};

export default GameTrailer;
