export const urlSearchPostsParams = (start: number, limit: number) =>
  new URLSearchParams({
    _start: start.toString(),
    _limit: limit.toString(),
  });

export const API = {
  posts: `${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
  comments: `${process.env.NEXT_PUBLIC_DOMAIN}/comments`,
};

export const setLike = async (postId: number) => {
  const res = await fetch(`${API.posts}/${postId}`);

  if (!res.ok) {
    throw new Error(`Error! status: ${res.status}`);
  }
  return res.json();
};
