import { useState } from 'react';
import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import './assets/style/Forum.css';

const Forum = () => {
    const [forumTopics, setForumTopics] = useState([
      { id: 1, title: 'Community Guidelines', replies: 1, views: 896, lastActivity: 'May 2023' },
      { id: 2, title: 'DangerEye Beta Test Feedback', replies: 52, views: 320, lastActivity: '2 days ago' },
      { id: 3, title: 'How accurate are the user-generated reports?', replies: 8, views: 982, lastActivity: '1 week ago' },
      { id: 4, title: 'Suggestion: Option to filter crime types', replies: 12, views: 265, lastActivity: '3 days ago' },
      { id: 5, title: 'Safety tips for using DangerEye at night', replies: 5, views: 180, lastActivity: '2 weeks ago' },
      { id: 6, title: 'Share your DangerEye success stories!', replies: 22, views: 488, lastActivity: '1 day ago' },
      { id: 7, title: 'Question: How are incidents verified?', replies: 7, views: 165, lastActivity: '1 week ago' }
    ]);
  
    const [newTopicTitle, setNewTopicTitle] = useState('');
    const [newTopicContent, setNewTopicContent] = useState('');
    const [activeCategory, setActiveCategory] = useState('latest');
    const [showModal, setShowModal] = useState(false);
  
    const handleAddTopic = (e) => {
      e.preventDefault();
      if (newTopicTitle.trim() === '') return;
      
      const newTopic = {
        id: forumTopics.length + 1,
        title: newTopicTitle,
        content: newTopicContent,
        replies: 0,
        views: 0,
        lastActivity: 'Just now'
      };
      
      setForumTopics([newTopic, ...forumTopics]);
      setNewTopicTitle('');
      setNewTopicContent('');
      setShowModal(false);
    };

    const handleModalBackgroundClick = (e) => {
      if (e.target.className === 'modal-background') {
        setShowModal(false);
      }
    };
  
    const getFilteredTopics = () => {
      if (activeCategory === 'top') {
        return [...forumTopics].sort((a, b) => b.views - a.views);
      }
      return forumTopics;
    };
  
    return (
        <div className='forumPageContainer'>
            <HeaderComponent/>
      <div className="forum-container">
        <div className="forum-header">
          <h1 className="forum-title">Open Forum</h1>
          <div className="tab-container">
            <button 
              className={`tab-button ${activeCategory === 'latest' ? 'active' : ''}`}
              onClick={() => setActiveCategory('latest')}
            >
              Latest
            </button>
            <button 
              className={`tab-button ${activeCategory === 'categories' ? 'active' : ''}`}
              onClick={() => setActiveCategory('categories')}
            >
              Categories
            </button>
            <button 
              className={`tab-button ${activeCategory === 'top' ? 'active' : ''}`}
              onClick={() => setActiveCategory('top')}
            >
              Top
            </button>
          </div>
        </div>
        {/* adding new disccusion*/}
        <div className="add-discussion-container">
        <button 
          className="add-discussion-button"
          onClick={() => setShowModal(true)}
        >
          + Add Discussion
        </button>
      </div>
      
      {showModal && (
        <div className="modal-background" onClick={handleModalBackgroundClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Create New Discussion</h3>
              <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddTopic}>
              <div className="form-group">
                <label htmlFor="topicTitle">Discussion Title</label>
                <input
                  id="topicTitle"
                  type="text"
                  value={newTopicTitle}
                  onChange={(e) => setNewTopicTitle(e.target.value)}
                  placeholder="Enter your discussion title"
                  className="new-topic-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="topicContent">Discussion Content</label>
                <textarea
                  id="topicContent"
                  value={newTopicContent}
                  onChange={(e) => setNewTopicContent(e.target.value)}
                  placeholder="Share your thoughts or questions..."
                  className="new-topic-content"
                  rows="5"
                  required
                />
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="post-button">
                  Post Discussion
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        <table className="forum-table">
          <thead className="table-header">
            <tr className="header-row">
              <th className="topic-header">Topic</th>
              <th className="replies-header">Replies</th>
              <th className="views-header">Views</th>
              <th className="activity-header">Activity</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredTopics().map((topic) => (
              <tr key={topic.id} className="topic-row">
                <td className="topic-cell">
                  <div className="topic-content">
                    <div className="topic-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <button className="topic-title-button">{topic.title}</button>
                    </div>
                  </div>
                </td>
                <td className="replies-cell">{topic.replies}</td>
                <td className="views-cell">{topic.views}</td>
                <td className="activity-cell">{topic.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <FooterComponent/>
      </div>
      
    );
  };
  
  export default Forum;