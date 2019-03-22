import React from "react";
import AsyncAwaiter from "./components/AysncAwaiter";
import AppView from "./components/AppView";
import firebase from "./utils/firebase";

const articlesRef = firebase.database().ref("articles");
const articleKey = "1idVBRTYH12sasncS";

const formatComments = obj => {
  return Object.keys(obj).map(item => obj[item]);
};

export default class AppContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = ["Setting a timer"];
    this.state = {
      inputValue: "",
      shouldLoading: false,
      articleData: undefined,
      comments: undefined
    };
  }

  componentDidMount() {
    articlesRef.child(articleKey).on("value", snapshot => {
      const { comments, ...articleData } = snapshot.val();
      this.setState({
        ...this.state,
        comments: formatComments(comments),
        articleData: articleData
      });
    });
  }

  handleChange = inputValue => {
    this.setState({
      inputValue
    });
  };

  handleSaveComment = () => {
    const { inputValue, comments } = this.state;
    const newComment = {
      comment: inputValue,
      userName: "Aya",
      userImgUrl:
        "https://www.todaysparent.com/wp-content/uploads/2016/05/when-do-babies-sit-up.jpg"
    };
    this.setState(
      {
        shouldLoading: true
      },
      () => {
        return articlesRef
          .child(articleKey)
          .child("comments")
          .push()
          .set(newComment, () => {
            this.setState({
              comments: [...comments, newComment],
              shouldLoading: false
            });
          });
      }
    );
  };

  render() {
    const { articleData } = this.state;
    return AsyncAwaiter({
      isLoading: !articleData,
      children: AppView({
        ...this.state,
        onChange: this.handleChange,
        onPress: this.handleSaveComment
      })
    });
  }
}
