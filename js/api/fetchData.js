export async function fetchData(url){
  const response = await fetch(url);

  if(!response.ok){
    throw new Error(`Request failed with status ${response.status}`);
  }

  const results = await response.json();
  return results.data;
}
