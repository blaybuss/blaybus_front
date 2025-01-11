import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RedCheck from "../assets/images/redCheck.svg"; 

interface PostCardProps {
  category: string; 
  title: string; 
  content: string; 
  isNew: boolean; 
  isChecked: boolean; 
  onPress: () => void; 
}

const PostCard: React.FC<PostCardProps> = ({
  category,
  title,
  content,
  isNew,
  isChecked,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={styles.category}>{category}</Text>
        {isNew && <Text style={styles.newBadge}>N</Text>}
      </View>

      <Text style={styles.title}>{title}</Text>
      
      <Text style={styles.content}>{content}</Text>

      <View style={styles.iconContainer}>
        { isRead ? (<RedCheck
          width={20}
          height={20}
          fill={isChecked ? "#ff0000" : "#cccccc"}
        />) : (
            <EmptyCircle
                width={24}
                height={24}
                fill="#d9d9d9"/>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "transparent",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  category: {
    fontSize: 12,
    backgroundColor: "#ff5a5f",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 8,
  },
  newBadge: {
    fontSize: 12,
    backgroundColor: "#ff5a5f",
    color: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: "flex-end",
  },
});

export default PostCard;

