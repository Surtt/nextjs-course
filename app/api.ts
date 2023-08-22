export const urlSearchPostsParams = new URLSearchParams({
  _start: '0',
  _limit: '10',
});

export const API = {
  posts: `${process.env.NEXT_PUBLIC_DOMAIN}/posts`,
};
