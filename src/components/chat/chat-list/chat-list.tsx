import { ChatItem } from '@/types/chat-item';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Divider, ListItemAvatar } from '@mui/material';

const ChatList = ({ chats }: { chats: ChatItem[] }) => {
  if (!chats.length) {
    return (
      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 2,
          p: 3,
          textAlign: 'center',
          color: 'text.secondary',
        }}
      >
        <Typography variant="body1">Диалогов нет</Typography>
      </Box>
    );
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
      {chats.map((chat, idx) => (
        <React.Fragment key={chat.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={chat.title} src={undefined}>
                {chat.title[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={chat.title}
              secondary={
                chat.lastMessage ? (
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'text.primary', display: 'inline' }}
                  >
                    {chat.lastMessage}
                  </Typography>
                ) : null
              }
            />
          </ListItem>
          {idx < chats.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}

export default ChatList;
