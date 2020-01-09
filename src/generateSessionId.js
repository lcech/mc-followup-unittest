function generateSessionId () {
  return new Date().getTime() + '.' + Math.random().toString(36).substring(5);
}