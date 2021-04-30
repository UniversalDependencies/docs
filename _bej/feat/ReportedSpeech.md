---
layout: feature
title: 'ReportedSpeech'
shortdef: 'Reported speech annotation'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Boolean feature, typically of [parataxis object](dep/parataxis:obj) dependent. The reported speech is used to report people's words.Its presence may indicate a double enunciation:  there is a first speech which is the speaker's and a second in which the speaker takes over the speech of a third party or his own
speech. Beja has only direct reported speech.
We have reported speech with discourse verb introducing the reported speech and reported speech without.

### <a name="Yes">`Yes`</a>: it is reported speech 

Note that there is no `No` value. If the word is not a reported speech head, the
`ReportedSpeech` feature will just not be mentioned in the `FEAT`
column. (Which means that empty value has the `No` meaning.)

#### Examples

- _tak / <b>kaːm =i / hoː kʷiɖ -ja</b> i- ni //_ "A man said: <b>"My camel disappeared."</b>"
