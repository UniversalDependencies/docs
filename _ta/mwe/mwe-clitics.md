## Clitic Segmentation: Overview

Tamil has several clitic-like elements that attach to a host word. In UD tokenisation, these should be segmented only when they function as independent syntactic, discourse, focus, interrogative, coordinative, or emphatic elements.

However, clitic segmentation should not be applied mechanically, and the decision should be based on syntactic behaviour, and the intended annotation policy.

This section discusses clitics other than **உம் / -um**, which is documented separately.

---

## Candidate Clitics for Segmentation

| Clitic | Transliteration | Main functions |
|---|---|---|---|
| தான் | tāṉ | focus, emphasis  |
| ஏ | ē | emphasis, self-performance  |
| ஆ | ā | yes/no question |
| ஓ | ō | doubt, indefiniteness, or-coordination  |
| ஆவது | āvatu | minimum, or-coordination, indefiniteness, order, impossibility  |
| ஆம் | ām | reportive/suppositional marker (except for V + ām cases where ām marks modal) |
| கூட | kūṭa | even, also, with |
| மட்டும் | maṭṭum | only, restrictive focus s |
| எல்லாம் | ellām | inclusive/distributive |

---

## தான் / tāṉ: Emphatic or Focus Clitic

The clitic **தான்** marks emphasis or focus. It may attach to different constituents.

```text
குமார்தான்     நேற்று       வந்தான்
குமார்  தான்   நேற்று       வந்தான்
Kumar FOC   yesterday   come-PST-3SG.M
It was Kumar who came yesterday.

குமார்   நேற்றுதான்         வந்தான்
குமார்   நேற்று தான்        வந்தான் 
Kumar  yesterday FOC    come-PST-3SG.M
It was yesterday that Kumar came.
```
The form **தான்** should not always be treated as a clitic. In some contexts it functions as a pronoun/reflexive-like pronoun - usally in such cases tāṉ is written separately.

```text
குமார்    தானும்      வருவதாகச்                        சொன்னான்
குமார்    தான் உம்    வருவ            அது ஆகச்        சொன்னான்.
Kumar   self also  come-பிரஸ்-NMLZ  it  COMP        say-PST-3MSG
Kumar   said that he also will come
```

---

## ஏ / ē: Emphatic Clitic

The clitic **ஏ** marks emphasis, exclusiveness, or strong assertion.

```text
அவர்கள் என்னையே கூப்பிடுகிறார்கள்.
அவர்கள் என்னை    ஏ             கூப்பிடுகிறார்கள் .
they   me-ACC   EMPH/DOUBT    call-PRS-3PL
They are calling me specifically.

குமார்   வரவே             வரமாட்டான்
குமார்   வர        ஏ      வரமாட்டான்
Kumar  come-INF  EMPH   come-INF-will.not-3SG.M
Kumar will not come at all
```

---

## ஆ / ā: Interrogative Clitic

The clitic **ஆ** marks yes/no questions.

```text
குமார்    வந்தானா ?
குமார்    வந்தான்            ஆ
Kumar   come-PST-3SG.M    Q
Did Kumar come?


குமார்   ஊருக்கா       போகிறான்?
குமார்   ஊருக்கு   ஆ   போகிறான் ?
Kumar  town-DAT Q    go-PRS-3SG.M
Is Kumar going to town?
```

---

## ஓ / ō: Doubt, Indefiniteness, Topic/Contrast, or Coordination

The clitic **ஓ** has several functions. It may mark doubt, indefiniteness, topic/contrast, or disjunctive coordination. In case of disjunctive coordination, the clitic should be labled CCONJ, and in other cases it should be labelled PART.


```text
### Doubt / Dubitative

குமார்   மறுபடியும் வெற்றி     பெறுவானோ?
குமார்   மறுபடியும் வெற்றி     பெறுவான்         ஓ ?
Kumar  again   victory  get-FUT-3SG.M   DUB
Whether Kumar will win again?

### Indefiniteness

நேற்று        யாரோ       உன்னைக்   கூப்பிட்டார்கள்
நேற்று        யார்   ஓ     உன்னைக்   கூப்பிட்டார்கள் 
yesterday   who   INDEF you-ACC   call-PST-3PL
Someone called you yesterday.

### Or-coordination

குமாரோ      ராஜாவோ     வருவார்கள்.
குமார்   ஓ    ராஜா   ஓ    வருவார்கள் .
Kumar  or   Raja   or    come-FUT-3PL
Kumar or Raja will come.
```

---

## ஆவது / āvatu

The form **ஆவது** has several functions. It can mark minimum, disjunction, indefiniteness, ordinal formation, or impossibility. 

```text
நீங்களாவது             நாளை       வரவேண்டும்.
நீங்கள்     ஆவது       நாளை       வரவேண்டும் .
you-PL    at.least   tomorrow   come-INF-must
At least you must come tomorrow.

### Or-coordination

காபியாவது       தேநீராவது       போடு
காபி    ஆவது   தேநீர் ஆவது     போடு
coffee or     tea   or       prepare.IMP
Prepare coffee or tea.
```

#### Ordinal use āvatu should not be segmented

```text
முதலாவது    இடம்
first      place
```
---

## ஆம் / ām

The form **ஆம்** has at least two different uses that must be distinguished.

```text
### Reportive marker

குமார்     நாளைக்கு       வருகிறானாம்
குமார்     நாளைக்கு       வருகிறான்         ஆம்
Kumar    tomorrow-DAT  come-PRS-3SG.M   REP
Kumar is said to be coming tomorrow.
```
In this use (reportive) ām should be marked PART.

In case of modal/permission forms such as போகலாம் may-go, it should not be tokenised, because, the resulting parts do not function as independent syntactic words in the sentence.


```text
நீங்கள்    போகலாம்
you-PL   may.go
```

---

## கூட / kūṭa

The form **கூட** may function as “even”, “also”, or “with”. 

```text
அவன்கூட     வரவில்லை.
அவன்  கூட   வரவில்லை .
he    even  come-NEG.PST
Even he did not come.


அவன்கூட     வந்தேன்.
அவன் கூட    வந்தேன் .
he   with   come-PST-1SG
I came with him.

```

In the second case, **கூட** has a comitative/postpositional function, therefore, UPOS should be ADP, not PART. 

---

## மட்டும் / maṭṭum

The form **மட்டும்** marks restriction, meaning “only”.

```text
அவன்மட்டும்    வந்தான்
அவன் மட்டும்   வந்தான் 
he   only   came-3SG.M
Only he came.
```

---

## எல்லாம் / ellām

The form **எல்லாம்** can function as an inclusive element.

```text
அவனெல்லாம் வந்தான்.
அவன்    எல்லாம்          வந்தான் .
he      all came-3SG.M
He and others came
```

This should be marked DET only when it functions as a clitic-like marker. 
If **எல்லாம்** functions as an pronoun, it should be marked differently.

---

## Cases Where Clitic-like Forms Should Not Be Segmented

Some clitic-like forms should remain inside the word because they form lexicalised, derived, modal, or indefinite expressions.

In short...

```text
Do not segment clitics mechanically.
A clitic should be segmented only when it functions as an independent syntactic or discourse unit.
```
