---
layout: feature
title: 'Polite'
shortdef: 'politeness'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Elev">Elev</a></td>
  <td><a href="#Form">Form</a></td>
  <td><a href="#Humb">Humb</a></td>
  <td><a href="#Infm">Infm</a></td>
</tr>
</table>

Various languages have various means to express politeness or respect; some
of the means are morphological. Three to four dimensions of politeness are
distinguished in linguistic literature. The `Polite` feature currently covers
(and mixes) two of them; a more elaborate system of feature values may be
devised in future versions of UD if needed. The two axes covered are:

* speaker-referent axis (meant to include the addressee when he happens to be the referent)
* speaker-addressee axis (word forms depend on who is the addressee, although the addressee is not referred to)

Changing pronouns and/or person and/or number of the verb forms when respectable
persons are addressed in Indo-European languages belongs to the speaker-referent
axis because the honorific pronouns are used to refer to the addressee.

In Czech, formal second person has the same form for singular and plural, and
is identical to informal second person plural. This involves both the pronoun
and the finite verb but not a participle, which has no special formal form
(that is, formal singular is identical to informal singular, not to informal plural).

In German, Spanish or Hindi, both number and person are changed (informal third
person is used as formal second person) and in addition, special pronouns are used
that only occur in the formal register ([de] _Sie;_ [es] _usted, ustedes;_
[hi] आप _āpa_).

In Japanese, verbs and other words have polite and informal forms but the polite
forms are not referring to the addressee (they are not in second person). They
are just used because of who the addressee is, even if the topic does not
involve the addressee at all. This kind of polite language is called teineigo (丁寧語)
and belongs to the speaker-addressee axis. Nevertheless, we currently use the
same values for both axes, i.e. `Polite=Form` can be used for teineigo too.
This approach may be refined in future.

### <a name="Infm">`Infm`</a>: informal register

Usage varies but if the language distinguishes levels of politeness, then
the informal register is usually meant for communication with family
members and close friends.

Examples:

* [cs] _<b>ty jdeš / vy jdete</b>_ (you go.Sing/Plur)
* [de] _<b>du gehst / ihr geht</b>_ (you go.Sing/Plur)
* [es] _<b>tú vas / vosotros vais</b>_ (you go.Sing/Plur)
* [ja] <b>行かない _ikanai_</b> (will not go)

### <a name="Form">`Form`</a>: formal register

Usage varies but if the language distinguishes levels of politeness, then
the polite register is usually meant for communication with strangers
and people of higher social status than the one of the speaker.

Examples:

* [cs] _<b>vy jdete</b>_ (you go.Sing/Plur)
* [de] _<b>Sie gehen</b>_ (you go.Sing/Plur)
* [es] _<b>usted va / ustedes van</b>_ (you go.Sing/Plur)
* [ja] <b>行きません _ikimasen_</b> (will not go)

### <a name="Elev">`Elev`</a>: referent elevating

This register belongs to the speaker-referent axis and can be seen as a subtype
of the formal register there. As an example, Japanese sonkeigo (尊敬語) is a set
of honorific forms that elevate the status of the referent.

* [ja] <b>なさる _nasaru,_</b> なさいます _nasaimasu_ (to do; when talking about a customer or a superior)

### <a name="Humb">`Humb`</a>: speaker humbling

This register belongs to the speaker-referent axis and can be seen as a subtype
of the formal register there. As an example, Japanese kenjōgo (謙譲語) is a set
of honorific forms that lower the speaker's status, thereby raising the referent's
status by comparison.

* [ja] <b>いたす _itasu,_</b> いたします _itashimasu_ (to do; when referring to one's own actions or the actions of a group member)

### References

* Brown, Penelope and Stephen C. Levinson. 1987. Politeness: Some Universals in Language Usage. Studies in Interactional Sociolinguistics, Cambridge, UK: Cambridge University Press.
* Comrie, Bernard. 1976. Linguistic politeness axes: Speaker-addressee, speaker-referent, speaker-bystander. Pragmatics Microfiche 1.7(A3). Department of Linguistics, University of
Cambridge.
* Wenger, James R. 1982. Some Universals of Honorific Language with Special Reference to Japanese. Ph.D. thesis, University of Arizona, Tucson, AZ.
