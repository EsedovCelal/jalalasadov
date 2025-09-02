import "./App.css";
import "./index.css";
import BlogPage from "./container/BlogPage";
import PageContainer from "./container/PageContainer";
import "tw-elements";

function App() {
  return (
    <PageContainer>
      <BlogPage />
    </PageContainer>
  );
}

export default App;
