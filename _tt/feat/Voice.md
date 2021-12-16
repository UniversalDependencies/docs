---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cau">Cau</a></td>
  <td><a href="#CauPass">CauPass</a></td>
  <td><a href="#CauPassRcp">CauPassRcp</a></td>
  <td><a href="#CauRcp">CauRcp</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#PassRcp">PassRcp</a></td>
  <td><a href="#Rcp">Rcp</a></td>
</tr>
</table>

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient.

(**This feature, as defined currently, cannot correctly handle voice features on Tatar verbs.**)
The above combinations (of camel-case voice values) are a temporary solution to indicate "multiple
voice" features, but they are certainly not the best way to indicate
these features.
See [#197](https://github.com/UniversalDependencies/docs/issues/197) and
[#125](https://github.com/UniversalDependencies/docs/issues/125#issuecomment-112512320)
for the discussion.


### <a name="Pass">`Pass`</a>: passive voice

Passive voice demotes a subject to an oblique argument, and promotes an object to the subject position.

#### Examples

* _ичек ач<b>ыл</b>ды_  "the door was opened"

### <a name="PassRcp">`PassRcp`</a>: combination of passive and reciprocal voices

This language-specific value indicates that a verb with a reciprocal suffix is passivized.

#### Examples

* _аңла-<b>ш-ыл</b>-ды_ "alright" (lit: (it was) mutually understood)


### <a name="Rcp">`Rcp`</a>: reciprocal voice

A reciprocal verb describes an event in which two agents (or groups of agents) perform the same action upon each other.

The reciprocal is expressed by the suffix _-ыш/еш_ however,
the verb roots that can become reciprocal is limited.

#### Examples

* _күр<b>еш</b>ербез_ "we will see each other"


### <a name="Cau">`Cau`</a>: causative voice

In causative constructions the subject is the entity "causing" the action. It generally translate to English as 'cause/make/have/let/allow' someone to perform action described by the main verb.

#### Examples

* _аңла<b>т</b>тым_ "I explained (it)" (lit. "I made him/her/them understand it")
* _бәяне арт<b>тыр</b>дым_ "I raised the price" (lit. "I made the price increase")


### <a name="CauPass">`CauPass`</a>: passive causative voice

This language-specific value indicates that a verb has been first causativized, then passivized.
The meaning is "the subject was caused (by somebody) to do the action."

#### Examples

* _шул мәсьәлә аңла-<b>т-ыл</b>-ды_ "The problem was explained"


### <a name="CauRcp">`CauRcp`</a>: causative reciprocal voice

This language-specific value indicates that a verb with a reciprocal suffix is causativized.
The meaning is “the subject was caused (by somebody) to do the action.”

It describes an event in which two agents (or groups of agents) perform the same action upon each other and another entity causes the action.

#### Examples

* _ул мине аңа белән тан-<b>ыш-тыр-</b>ды_ "He introduced him/her to me" (lit: "He made me get to know with him/her")

### <a name="CauPassRcp">`CauPassRcp`</a>: causative reciprocal passive voice

This language-specific value indicates that a verb with a reciprocal suffix is passivized and causativized.
The meaning is “the subject was caused (by somebody) to do the action.”


It describes an event in which two agents (or groups of agents) perform the same action upon each other and another entity causes the action.
#### Examples

* _Укучылар эвакуация планы белән тан-<b>ыш-тыр-ыл</b>-ды_ "The students got familiarized with the evacuation plan" (lit: "The students were made to get to know with the evacuation plan")
<!-- Interlanguage links updated St lis 3 20:58:32 CET 2021 -->
