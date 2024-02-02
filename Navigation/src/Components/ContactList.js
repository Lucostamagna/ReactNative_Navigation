import * as React from 'react';
import {
  View,
  Button,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import { getRandomPhoto } from '../utils/randomPhoto';
import Input from './Input';
import { Colors } from '../Contants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function ContactList({
  contacts,
  onChangeContact,
  onDeleteContact,
}) {
  return (
    <View>
      <ScrollView>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            contact={contact}
            onChange={onChangeContact}
            onDelete={onDeleteContact}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function Contact({ contact, onChange, onDelete }) {
  const [isEditing, setIsEditing] = React.useState(false);
  let contactContainer;
  //no necesito que se vuelvan a renderizar loscontact que ya tengo
  const memoPhoto = React.useMemo(() => getRandomPhoto(), []);

  if (isEditing) {
    contactContainer = (
      <View>
        <Input
          value={contact.name}
          onChangeText={text => onChange({ ...contact, name: text })}
        />
      </View>
    );
  } else {
    contactContainer = (
      <View>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    );
  }
  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image style={styles.image} source={memoPhoto} />
        {contactContainer}
      </View>
      <View style={styles.row}>
        {isEditing ? (
          <Button title="Save" onPress={() => setIsEditing(false)} />
        ) : (
          <Pressable onPress={() => setIsEditing(true)}>
            <FontAwesome
              name="edit"
              size={24}
              color={Colors.details}
              style={{ marginRight: 15, marginTop: 5 }}
            />
          </Pressable>
        )}
        <Pressable onPress={() => onDelete(contact.id)}>
          <FontAwesome
            name="trash"
            size={24}
            color={Colors.details}
            style={{ marginRight: 15, marginTop: 5 }}
          />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contactContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.dark,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
});
