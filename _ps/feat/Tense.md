---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Pres">Pres</a></td>
  <td><a href="#Past">Past</a></td>
  <td><a href="#Fut">Fut</a></td>
</tr>
</table>

Tense is a feature that specifies the time when the action took / takes / will take place,
in relation to the current moment or to another action in the utterance. The `tense` feature occurs with verbs ([VERB]())
and auxiliary verbs ([AUX]()).

Regular verbs in Pashto have simple forms for the present and past tenses,
while the future tense is usually analytical.
There are also compound forms of perfect tenses (past perfect, present perfect, future perfect),
which consist of a participle and an auxiliary verb in one of the three basic tenses. None of these
parts is tagged as a perfect tense.

### <a name="Pres">`Pres`</a>: present

The present tense combined with imperfective aspect `Aspect=Imp`
denotes actions that are happening in the present moment
or happen repeatedly in the period spanning through the present moment.

The present tense combined with perfective aspect `Aspect=Perf`
would have no use, since there cannot be a punctual action happening in the present moment,
but these forms have the meaning of the subjunctive mood. This is not marked, because
the forms are formally indicative and they are used also for the future
perfective tense.

The regular verbs have simple forms for the present tense in boths aspects.
The forms for the third person of both numbers are usually identical.

Overview of the present endings:
<table border="1">
<tr>
  <td/>
  <td align="middle"><b>SG</b></td>
  <td align="middle"><b>PL</b></td>
</tr>
<tr>
  <td align="middle"><b>1</b></td>
  <td align="middle">م ëm</td>
  <td align="middle">و u</td>
</tr>
<tr>
  <td align="middle"><b>2</b></td>
  <td align="middle">ې e</td>
  <td align="middle">ئ ëy</td>
</tr>
<tr>
  <td align="middle"><b>3</b></td>
  <td align="middle" colspan="2">ي i</td>
</tr>
</table>

#### Examples

* present imperfective: کتاب **لرلم** _kitấb **lwalë́m**_ “I am reading a book”
* present perfective (=subjunctive): کتاب **ولرلم** _kitấb **wë́lwalëm**_ “so that I read a book / I would read a book”

### <a name="Past">`Past`</a>: past

The past tense denotes actions that happened (once or repeatedly)
or were happening in the past. It has simple forms for both aspects.
The transitive verbs in the past tense agree with their objects instead
of the subjects. The past verb stem for the past tense may differ from the present stem.
The forms for the third person of both numbers are further distinguished
according to the `Gender`.

Overview of the past endings:
<table border="1">
<tr>
  <td/>
  <td align="middle" colspan="2"><b>SG</b></td>
  <td align="middle" colspan="2"><b>PL</b></td>
</tr>
<tr>
  <td/>
  <td align="middle"><b>M</b></td>
  <td align="middle"><b>F</b></td>
  <td align="middle"><b>M</b></td>
  <td align="middle"><b>F</b></td>
</tr>
<tr>
  <td align="middle"><b>1</b></td>
  <td align="middle" colspan="2">لم ëlëm</td>
  <td align="middle" colspan="2">لو ëlu</td>
</tr>
<tr>
  <td align="middle"><b>2</b></td>
  <td align="middle" colspan="2">لې ële</td>
  <td align="middle" colspan="2">لئ ëlëy</td>
</tr>
<tr>
  <td align="middle"><b>3</b></td>
  <td align="middle">- ë</td>
  <td align="middle">له ëla</td>
  <td align="middle">لۀ ëlë<br/>ل ël</td>
  <td align="middle">لې ële</td>
</tr>
</table>

#### Examples

* past imperfective: ما پرون کتاب **لوستۀ** _mâ parún kitấb **lwëstë́**_ “I was reading a book yesterday”
* past perfective: ما پرون کتاب **ولوستۀ** _mâ parún kitấb **wë́lwëstë**_ “I read a book yesterday”


### <a name="Fut">`Fut`</a>: future

The Pashto verbs have a compound future tense that consist of a future particle بۀ _bë_
and the present forms of the verb - present imperfective for the imperfective future
and present perfective (with the subjunctive meaning) for the perfective future.
The verb forms are tagged with `Tense=Pres`, while the future particle bears the
`Tense=Fut` tag.

The only verb that can be marked directly with `Tense=Fut` is the third person singular future form
of the verb “to be”, which differs from itS present counterpart: بۀ وی _bë wi_ “He/She/It will be”
(compare with the present form دی _day_ (m) / ده _da_ (f) “He/She/It is”).

#### Examples

* future imperfective: صبا **بۀ** کتاب **لرلم** _sabấ **bë** kitấb **lwalë́m**_ “I will be reading a book tomorrow”
* future perfective: صبا **بۀ** کتاب **ولرلم** _sabấ **bë** kitấb **wë́lwalëm**_ “I will read a book tomorrow”


<!-- Interlanguage links updated Ne 5. května 2024, 18:20:03 CEST -->
