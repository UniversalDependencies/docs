---
layout: feature
title: 'Aspect'
shortdef: 'aspect'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Hab">Hab</a></td>
  <td><a href="#Perf">Perf</a></td>
  <td><a href="#Pers">Pers</a></td>
  <td><a href="#Prog">Prog</a></td>
</tr>
</table>


Aspect describes the internal temporal properties of the described situation. 
In Ruuli, aspect is a feature realized on the verb as an affix.
It marks whether a situation is viewed as a whole (perfective) or viewed as occupying a period of time,
with further subdivisions marking a recurrent situation (habitual), a situation in progress (progressive), 
or marking discursive emphasis on a situation obtaining (persistive).  

Ruuli also allows an additional aspect feature, annotated as [Aspect[add]](), used in progressive with habitual combinations, where the progressive is primary and the habitual is marked as `Aspect[add]=Hab`.

### <a name="Hab">`Hab`</a>: habitual aspect

The habitual aspect is realized with the suffix _-nga_.
It encodes situations that are recurrent, habitual, typical of the reference time.

#### Examples

* _baazwala<b>nga</b>_ "they used to wear"

### <a name="Perf">`Perf`</a>: perfective aspect

The perfective aspect is realized with the suffix _-ire_ and its allomorph _-ere_.
It encodes situations that are viewed as a whole.

#### Examples

* _nsumb<b>ire<b>_ "I cooked"

### <a name="Pers">`Pers`</a>: persistive aspect

The persistive aspect is realized with the prefix _kya-_; it is used to emphasize that a situation holds at the reference time. 
Functionally, this corresponds to the concepts of phrasal polarity, such as 'still', 'no longer', and 'not yet'.

#### Examples

* _ba<b>kya</b>kolesya_ "they still use"

* _<b>ti</b>ba<b>kya</b>kolesya "they no longer use"

* _ba<b>kya</b>li kukolesya "they do not yet use (they are yet to use)"


### <a name="Prog">`Prog`</a>: progressive aspect

The progressive aspect is realized with the prefix _ku-_; it shows that the situation is in progress at the reference time. 
The Ruuli progressive is compatible with dynamic, stative, and punctual verbs.

#### Examples

* _n<b>ku</b>nyumirwa_ "I am enjoying"

<!-- Interlanguage links updated Po 29. června 2026, 18:10:28 CEST -->
