# Capstone Propsal

## WordShare

## Project Overview
There are already a plethora of dictionary apps out there. Their use involves little more than looking up a word, getting the definition, and soon after forgetting it. There is not an emphasis on constantly learning new words. On top of that, a lot of the apps ask for far too many permissions on your phone. The mission statement for WordShare is "To expand ones own vocabulary, and to encourage the growth of anothers". I anticipate I will use the major frameoworks we covered in class (JavaScript, Django, Vue, etc.).

### Features for a Minimum Viable Product:
- Search and define a word (with audio pronounciation).
- Save words to your personal account, so you can refer back to them.
- ability to delete saved words.

### User stories
"As a **reader**, I want a **way to save words I encounter, while reading** because I **want to build my vocabulary in a way that is efficient**."

#### Functionality Questions
- The home page will include a search bar, at the top, and words shared by friends (similar to seeing tweets). There will be a "load more" button at the bottom, if the user keeps scrolling. A button to their own personal profile page will be below the search bar, on the left ahd side. A button to look at your 'friends' list will be on the right of the previous mentioned button.
-The users profile page will display their username, date they joined, how many words they have saved, and the list of all their words. A more detailed view can be looked at for each word, which will include the defintion, and pronounciation. In the detailed view, the user will be able to delete any words from their own list. The detailed view will also include a 'post for my word of the day' button.
-The friends list will include their username, and link to their profile.
-an individual word will have a page that displays the word, pronounctiation and definition. There will be a 'save to my list' button that will add it to the users profile.

## Data Model
data will include:
- user
- friends
- words, definitions and pronounciations

## Schedule
first milestone: ability to search for a word, get the corresponding data, append words to personal list. Be able to create a profile and see the saved words, as well as delete them.

second milestone: a working friends list, home screen that will display shared word of the days, and the ability to post a word of the day.

third milestone: saved shared word of the days to personal list, ability to 'like' words of the day.