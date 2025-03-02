// testDataGenerator.ts

interface GetHelpData {
    fullname: string;
    needs: string[];
    location: string;
    number: string;
    email: string;
    story: string;
  }
  
  interface HelpOthersData {
    fullname: string;
    needs: string[];
    location: string;
    number: string;
    email: string;
  }
  
  function generateRandomName() {
    const firstNames = ["John", "Jane", "Alice", "Bob", "Charlie", "Diana", "Eve"];
    const lastNames = ["Smith", "Doe", "Johnson", "Brown", "Williams", "Taylor"];
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${first} ${last}`;
  }
  
  function generateRandomLocation() {
    const locations = [
      "New York, NY",
      "Los Angeles, CA",
      "Chicago, IL",
      "Houston, TX",
      "Miami, FL",
      "Boston, MA",
    ];
    return locations[Math.floor(Math.random() * locations.length)];
  }
  
  function generateRandomPhoneNumber() {
    // Very rough random phone generator
    return (
      "(" +
      Math.floor(100 + Math.random() * 900) +
      ") " +
      Math.floor(100 + Math.random() * 900) +
      "-" +
      Math.floor(1000 + Math.random() * 9000)
    );
  }
  
  function generateRandomEmail(fullname: string) {
    const domainList = ["gmail.com", "yahoo.com", "example.org", "test.com"];
    const domain = domainList[Math.floor(Math.random() * domainList.length)];
    // e.g. "John Smith" -> "john.smith@test.com"
    const parts = fullname.toLowerCase().split(" ");
    const emailName = parts.join(".");
    return `${emailName}@${domain}`;
  }
  
  function generateRandomStory() {
    const stories = [
      "Lost my job and need temporary assistance with food",
      "Single parent looking for child care support",
      "Need transportation to a medical appointment",
      "Struggling with housing and need a safe place to stay",
      "Recently relocated and need clothes and basic supplies",
    ];
    return stories[Math.floor(Math.random() * stories.length)];
  }
  
  function pickRandomNeeds(): string[] {
    const allNeeds = ["food", "shelter", "transportation", "child care", "clothes"];
    const needsCount = 1 + Math.floor(Math.random() * allNeeds.length); // pick 1–5
    // Shuffle and slice
    const shuffled = [...allNeeds].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, needsCount);
  }
  
  export function createTestData() {
    const getHelpSubmissions: GetHelpData[] = [];
    const helpOthersSubmissions: HelpOthersData[] = [];
  
    // Generate 5 "Get Help" submissions
    for (let i = 0; i < 5; i++) {
      const name = generateRandomName();
      getHelpSubmissions.push({
        fullname: name,
        needs: pickRandomNeeds(),
        location: generateRandomLocation(),
        number: generateRandomPhoneNumber(),
        email: generateRandomEmail(name),
        story: generateRandomStory(),
      });
    }
  
    // Generate 5 "Help Others" submissions
    for (let i = 0; i < 5; i++) {
      const name = generateRandomName();
      helpOthersSubmissions.push({
        fullname: name,
        needs: pickRandomNeeds(),
        location: generateRandomLocation(),
        number: generateRandomPhoneNumber(),
        email: generateRandomEmail(name),
      });
    }
  
    // Store in localStorage
    localStorage.setItem("getHelpSubmissions", JSON.stringify(getHelpSubmissions));
    localStorage.setItem("helpOthersSubmissions", JSON.stringify(helpOthersSubmissions));
  
    console.log("Test data generated!");
    console.log("getHelpSubmissions:", getHelpSubmissions);
    console.log("helpOthersSubmissions:", helpOthersSubmissions);
  }
  