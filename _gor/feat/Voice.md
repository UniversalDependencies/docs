---
layout: feature
title: 'Voice'
shortdef: 'voice'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Act">Act</a></td>
  <td><a href="#Ifoc">Ifoc</a></td>
  <td><a href="#Ivoc">Ifoc</a></td>
  <td><a href="#Pass">Pass</a></td>
  <td><a href="#Pat">Pat</a></td>
</tr>
</table>

Voice is typically a feature of [verbs](u-pos/VERB).
It may also occur with other parts of speech
([nouns](u-pos/NOUN), [adjectives](u-pos/ADJ), [adverbs](u-pos/ADV)),
depending on whether borderline word forms such as gerunds and participles
are classified as verbs or as the other category.

For Indo-European speakers, voice means mainly the active-passive
distinction. In other languages, other shades of verb meaning are
categorized as voice.

### <a name="Act">`Act`</a>: active or actor-focus voice

The subject of the verb is the doer of the action (agent), the object
is affected by the action (patient). This label is also used for the
actor-focus voice of Austronesian languages. <!-- which is labeled AGFOC in UniMorph -->

#### Examples

* [gor] _Tiyo **lolangi** to bulalo_ “He swam across the lake.”

### <a name="Pat">`Pat`</a>: patient voice

The subject of the verb is affected by the action (patient). The doer
(agent) is either unexpressed or it appears as an oblique dependent
or an object of the verb. This label is also used for the patient-focus
voice of Austronesian languages. <!-- which is labeled PFOC in UniMorph -->

#### Examples

* [gor] _Uponula **tilubu** li Dewi_ “Dewi cooked the fish. (patient voice)”

### <a name="Pass">`Pass`</a>: passive or patient-focus voice

The `Pass` label is commonly used in UD Austronesian languages for patient voice markers.
We do not use it in Gorontalo, but retain it for compatibility purposes.

### <a name="Ivoc">`Ivoc`</a>: instrument voice

The subject of the verb indicates the instrument, while the
doer and the undergoer/theme are coded as objects.
In Gorontalo, instrument voice multitasks as indicating the location of an action among other roles.

#### Examples

* [gor] _Ilengi pilo-pomulo li Bapu binthe_ “Grandfather planted corn in the field" (instrument voice)

### <a name="Ifoc">`Ifoc`</a>: instrument-focus voice

The `Ifoc` label is commonly used in UD Austronesian languages for instrument voice markers.
We do not use it in Gorontalo, preferring the __voc_ pattern that emphasises voice, but document it for compatibility purposes.
