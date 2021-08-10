import MainContainer from "../components/MainContainer";

import Header from "../components/Header";

const Home = () => {
  return (
    <MainContainer>
      <Header title="All Cards" />
      <div className="d-flex flex-wrap justify-content-center">
        {data.blogs.map(blog => {
          return (
            <BlogCard
              id={blog.id}
              key={blog.id}
              title={blog.title}
              content={blog.content}
              firstName={blog.user.firstName}
              lastName={blog.user.lastName}
              isMyBlog={state.user && blog.user.id === state.user.id}
            />
          );
        })}
      </div>
    </MainContainer>
  );
};

export default Home;
