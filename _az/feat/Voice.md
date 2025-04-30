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
  <td><a href="#CauCau">CauCau</a></td>
  <td><a href="#CauCauPass">CauCau</a></td>
  <td><a href="#CauPass">CauPass</a></td>
  <td><a href="#CauPassRcp">CauPassRcp</a></td>
  <td><a href="#CauRcp">CauRcp</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#PassPass">PassPass</a></td>
  <td><a href="#PassRfl">PassRfl</a></td>
  <td><a href="#PassRcp">PassRcp</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rfl">Rfl</a></td>
</tr>
</table>

Voice is a feature of verbs that helps map the traditional syntactic functions,
such as subject and object, to semantic roles, such as agent and patient.

(**This feature, as defined currently, cannot correctly handle voice features on Turkish verbs.**)
The above combinations (of camel-case voice values) are a temporary solution to indicate "multiple
voice" features, but they are certainly not the best way to indicate
these features.
See [#197](https://github.com/UniversalDependencies/docs/issues/197) and
[#125](https://github.com/UniversalDependencies/docs/issues/125#issuecomment-112512320)
for the discussion.



### <a name="CauCau">`CauCau`</a>: double causative voice

Causative suffix is quite productive.
Multiple causative suffixes can be attached to a verb,
and the number of causative suffixes are theoretically unbounded.
In practice, however, the cases where more than two causative suffixes attached to a verb is rather rare.
Often, two or more causative suffixes are used for emphasis and do not express multiple levels of causation.

#### Examples

* _Әrinә maşını yudur-<b>t</b>-<b>du</b>._ “She made her husband wash the car.”


### <a name="CauPass">`CauPass`</a>: passive causative voice

This language-specific value indicates that a verb has been first causativized, then passivized.
The meaning is “the subject was caused (by somebody) to do the action.”


#### Examples

* _Deniz yoxla-<b>d</b>-<b>ıl</b>-dı._ “Deniz was made to sleep.”


<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:11 CET -->
