---
layout: feature
title: 'Mood'
shortdef: 'mood'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Cnd">Cnd</a></td>
  <td><a href="#CndGen">CndGen</a></td>
  <td><a href="#CndGenPot">CndGenPot</a></td>
  <td><a href="#CndPot">CndPot</a></td>
  <td><a href="#Des">Des</a></td>
  <td><a href="#DesPot">DesPot</a></td>
  <td><a href="#Gen">Gen</a></td>
  <td><a href="#GenNec">GenNec</a></td>
  <td><a href="#GenNecPot">GenNecPot</a></td>
  <td><a href="#GenPot">GenPot</a></td>
  <td><a href="#GenPotPot">GenPotPot</a></td>
  <td><a href="#Imp">Imp</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Nec">Nec</a></td>
  <td><a href="#NecPot">NecPot</a></td>
  <td><a href="#Opt">Opt</a></td>
  <td><a href="#Pot">Pot</a></td>
  <td><a href="#PotPot">PotPot</a></td>
  <td><a href="#Prs">Prs</a></td>
</tr>
</table>

`Mood` expresses the modality, a speaker's perspective, in finite verbs.
Kyrgyz verbs may carry a wide range of mood information.
Different moods are indicated by a number of suffixes, which also interact with [tense](Tense) and [aspect](Aspect) of the verb.

Similar to the [Voice]() feature, a Kyrgyz verb may have multiple
Mood values expressed on a single verb.
Currently we concatenate the individual mood values,
but this is far from a good solution.

### <a name="Ind">`Ind`</a>: indicative

The indicative can be considered the default mood. A verb in indicative merely states that something happens, has happened or will happen, without adding any attitude of the speaker.

#### Examples

* *үйгө бара жатат* 'she is going home'
* *үйгө кетти* 'she went home'




### <a name="Imp">`Imp`</a>: imperative

In Kyrgyz imperatives are expressed by lack of any tense/aspect/modality marker. The form of imperative may indicate second or third person plural/singular. Note that, forms other than second person singular may indicate a wish rather than a command, so may be marked as `Opt` (see below).

#### Examples

* *Үйгө бар!* 'go home!'
* *үйгө кетсин* '(I am ordering him/her to) go home!'





### <a name="Pot">`Pot`</a>: potential

The suffix *-мак* may indicate ability or possibility.

#### Examples

* *ушул жерде болушмак* 'would be here.' 



### <a name="Cnd">`Cnd`</a>: conditional

This expresses conditionality.
It is the primary means of forming conditionals in Kyrgyz ('if, even').
The suffix responsible for this mood is *-саң, -са *.


#### Examples

* *Суудан жадасаң* 'Even from water'
* *ал үйгө бара жатса* 'if she is going home'
* *ал үйгө барса* 'if she goes home'

<!-- Interlanguage links updated Út 9. května 2023, 20:03:40 CEST -->
