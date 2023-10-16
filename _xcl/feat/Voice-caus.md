---
layout: feature
title: 'Voice[caus]'
shortdef: 'derived causative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Yes">Yes</a></td>
</tr>
</table>

Voice is typically a feature of [verbs](u-pos/VERB). Voice is a feature of verbs that helps map the traditional syntactic functions, such as subject and object, to semantic roles, such as agent and patient.
* In Classical Armenian, the voice category is expressed by the endings [Voice]() or a derivational causative suffix [Voice[caus]](). 
* Causative forms of verbs are classified as a voice category because, when compared to the basic active form, they change the number of participants and their mapping on semantic roles.
* The morphological causative is a derivational category in Classical Armenian. Causatives are derived from base verbs with the help of a productive valency-increasing suffix _-ուց-_/_-owcՙ-_ (or its rare variants _-ուս-_/_-ows-_ and _-ուզ-_/_-owz-_), and can be further marked by the inflectional voice as `Act` or `Pass`, which makes the voice a layered feature in Classical Armenian. The causative layer [Voice[caus]]() is a Boolean feature and tells whether the word is a derived causative or not. The value `Yes` corresponds to the `Cau` value of the universal Voice feature.
* Morphological causatives are typically derived from anticausative, experiential or agentive (intransitive) base verbs, while the causation of agentive transitive verbs is often expressed by the analytical causative (_տալ_/_tal_ 'to give' + infinitive).

#### Examples

* _Հաւատք քո կեցուցին զքեզ_. / _Hawatk῾ k῾o <b>kec῾-owc῾-in</b> zk῾ez_. “Your faith <b>has saved</b> you” (Luke 7:50). The causative form, derived from a base verb կեամ “to live”, is tagged by the features `Voice=Act` and `Voice[caus]=Cau`.

### References
Petr Kocharov. 2023. Causatives in Classical Armenian. _Folia Linguistica_ 57/3: 593-627.
