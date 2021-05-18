const commentFormHandler = async function(event) {
  event.preventDefault();

  const post_Id = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {

    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_Id,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);
