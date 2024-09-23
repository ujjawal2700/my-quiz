export default async function getQuestions(){
  try{
    const response = await fetch("https://opentdb.com/api.php?amount=10")
    const data = await response.json();
    return data;
  }catch (error){
    console.error("Error fatching Data:", error);
    return null;
  }
  
}