---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fut">Fut</a></td>
  <td><a href="#Past">Past</a></td>
  <td><a href="#Pres">Pres</a></td>
</tr>
</table>

Tense is a feature pertaining to finite verb and auxiliary forms and participles only; it specifies the time when the action took /
takes / will take place, in relation to the current moment or to
another action in the utterance.


### <a name="Past">`Past`</a>: past tense

The past tense denotes actions that happened before the current
moment. Modern Greek morphologically distinguishes between a perfective past tense (Αόριστος) and an Imperfective one (Παρατατικός). 

#### Examples
* Perfective past tense: _έγραψα_ "I wrote"
* Imperfective past tense: _έγραφα_ "I was writing"

Modern Greek also forms composite tenses describing situations occurring before a specified point in time, now, in the past or the future, with the use of auxiliaries, namely the verb 'have' in the active voice and the verb 'be' in the passive. 
In these cases, each form (the auxiliary and the verb) are assigned their own tense features. In particular, the active composite tenses formed with the verb 'have' contain a form of the content verb that is tagged as 'infinitive' [VerbForm](el-feature/VerbForm) that crucially is not specified for tense and mood.

#### Examples

* _έχω γράψει.INF_ "I _have.PRES_ written"
* _είχα γράψει.INF_ "I _had.PAST_ written"

* _είμαι γραμμένος.PARTICIPLE_ "I _am.PRES_ written"
* _ήμουν γραμμένος.PARTICIPLE_ "I _was.PAST_ written"



### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now or that
usually happen.


#### Examples

* _έρχομαι σπίτι_ “I _come/am coming_ home.” 
* _γράφω το γράμμα_ "I  _write/am writing _ the letter."

### <a name="Fut">`Fut`</a>: future tense

The future tense denotes actions that will happen after the current
moment. In Modern Greek, the feature future 'Fut' is always assigned to the auxiliarry θα that combines with all
the finite verbal formations of Modern Greek that preserve their normal taggs. θα is often argued to express potentiality rather than the future tense per se.


#### Examples
* _θα γράφω_ "Ι will be writing"
* _θα γράψω_ "Ι will write"
* _θα είχα γράψει_ "Ι would have written"
* _θα έγραφα_ "Ι would write"
* _θα έγραψα_ "Ι would have written"
* _θα γράφομαι_ "Ι will be being written"
*  _θα γραφτώ_ "Ι will be written"
* _θα γραφόμουν_ "Ι would be being written"
*  _θα γράφτηκα_ "Ι would be written"
* _θα είχω γραφτεί_ "Ι will have been written"
* _θα είχα γραφτεί_ "Ι would have been written"


