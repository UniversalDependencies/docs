# Morphological Feature Annotation for Tamil

Annotators should add all relevant features that are morphologically visible and useful for UD annotation, although the examples in the documentation provide only the feature being discussed in each respective example.

---

# 1. PronType

`PronType` is used for pronouns, determiners, pronominal adverbs, and related forms.

## Feature values used in Tamil

```text
PronType=Prs   personal pronoun
PronType=Dem   demonstrative
PronType=Int   interrogative
PronType=Ind   indefinite
PronType=Neg   negative indefinite
PronType=Rcp   reciprocal
PronType=Rel   relative
PronType=Tot   total / universal
```

Example:

```text
அவன் யார் ?
avaṉ yār ?
he   who
Who is he?

யார்    PRON    PronType=Int
```

| Tamil form | Transliteration | Meaning | UPOS | Suggested features |
|---|---|---|---|---|
| நான் | nāṉ | I | PRON | `PronType=Prs|Person=1|Number=Sing` |
| நாம் | nām | we, inclusive | PRON | `PronType=Prs|Person=1|Number=Plur|Clusivity=In` |
| நாங்கள் | nāṅkaḷ | we, exclusive | PRON | `PronType=Prs|Person=1|Number=Plur|Clusivity=Ex` |
| நீ | nī | you, singular/informal | PRON | `PronType=Prs|Person=2|Number=Sing|Polite=Infm` |
| நீங்கள் | nīṅkaḷ | you, plural/formal | PRON | `PronType=Prs|Person=2|Number=Plur|Polite=Form` |
| அவன் | avaṉ | he | PRON | `PronType=Prs/Dem|Person=3|Number=Sing|Gender=Masc|Deixis=Remt` |
| அவள் | avaḷ | she | PRON | `PronType=Prs/Dem|Person=3|Number=Sing|Gender=Fem|Deixis=Remt` |
| அவர் | avar | he/she, honorific | PRON | `PronType=Prs|Person=3|Number=Sing|Polite=Form` |
| அவர்கள் | avarkaḷ | they / he/she honorific | PRON | `PronType=Prs|Person=3|Number=Plur` |
| அது | atu | it / that | PRON | `PronType=Prs/Dem|Person=3|Number=Sing|Gender=Neut|Deixis=Remt` |
| அவை | avai | they, non-human | PRON | `PronType=Prs/Dem|Person=3|Number=Plur|Gender=Neut|Deixis=Remt` |
| இவன் | ivaṉ | this man/person | PRON | `PronType=Dem|Person=3|Number=Sing|Gender=Masc|Deixis=Prox` |
| இவள் | ivaḷ | this woman/person | PRON | `PronType=Dem|Person=3|Number=Sing|Gender=Fem|Deixis=Prox` |
| இவர் | ivar | this person, honorific | PRON | `PronType=Dem|Person=3|Number=Sing|Polite=Form|Deixis=Prox` |
| இவர்கள் | ivarkaḷ | these people | PRON | `PronType=Dem|Person=3|Number=Plur|Deixis=Prox` |
| இது | itu | this / this thing | PRON | `PronType=Dem|Person=3|Number=Sing|Gender=Neut|Deixis=Prox` |
| இவை | ivai | these things | PRON | `PronType=Dem|Person=3|Number=Plur|Gender=Neut|Deixis=Prox` |
| உவன் | uvaṉ | that person, medial | PRON | `PronType=Dem|Person=3|Number=Sing|Gender=Masc|Deixis=Med` |
| உவள் | uvaḷ | that woman/person, medial | PRON | `PronType=Dem|Person=3|Number=Sing|Gender=Fem|Deixis=Med` |
| உவர் | uvar | that person, medial honorific | PRON | `PronType=Dem|Person=3|Number=Sing|Polite=Form|Deixis=Med` |
| உது | utu | that thing, medial | PRON | `PronType=Dem|Person=3|Number=Sing|Gender=Neut|Deixis=Med` |
| யான் | yāṉ | I, literary | PRON | `PronType=Prs|Person=1|Number=Sing` |
| யாம் | yām | we, literary | PRON | `PronType=Prs|Person=1|Number=Plur` |
| தாம் | tām | self / honorific self | PRON | `PronType=Prs|Reflex=Yes|Polite=Form` |
| தான் | tāṉ | self / emphatic pronoun | PRON/PART | `PronType=Prs|Reflex=Yes` if reflexive; `PART` if focus clitic |
| தன் | taṉ | one’s own | PRON/DET | `PronType=Prs|Reflex=Yes|Poss=Yes` |
| தனது | taṉatu | one’s own | PRON/DET | `PronType=Prs|Reflex=Yes|Poss=Yes` |
| என் | eṉ | my | PRON/DET | `PronType=Prs|Person=1|Number=Sing|Poss=Yes` |
| உன் | uṉ | your | PRON/DET | `PronType=Prs|Person=2|Number=Sing|Poss=Yes` |
| யார் | yār | who | PRON | `PronType=Int` |
| எவன் | evaṉ | who, masculine | PRON | `PronType=Int|Gender=Masc` |
| எவள் | evaḷ | who, feminine | PRON | `PronType=Int|Gender=Fem` |
| எவர் | evar | who, honorific | PRON | `PronType=Int|Polite=Form` |
| எது | etu | what / which thing | PRON | `PronType=Int|Gender=Neut` |
| எவை | evai | which things | PRON | `PronType=Int|Number=Plur|Gender=Neut` |
| யாராவது | yārāvatu | someone / anyone | PRON | `PronType=Ind` |
| எதாவது | etāvatu | something / anything | PRON | `PronType=Ind` |
| சிலர் | cilar | some people | PRON | `PronType=Ind|Animacy=Hum|Number=Plur` |
| சில | cila | some | DET/PRON | `PronType=Ind` |
| பலர் | palar | many people | PRON | `PronType=Ind|Animacy=Hum|Number=Plur` |
| பல | pala | many | DET/PRON | `PronType=Ind` |
| ஏதேனும் | ētēṉum | something / any | PRON | `PronType=Ind` |
| ஒருவருக்கொருவர் | oruvarukku-oruvar | each other | PRON | `PronType=Rcp|Case=Dat` |
| அனைவரும் | aṉaivarum | everyone | PRON | `PronType=Tot|Animacy=Hum|Number=Plur` |
| எல்லோரும் | ellōrum | everyone | PRON | `PronType=Tot|Animacy=Hum|Number=Plur` |
| எல்லாம் | ellām | everything / all | PRON | `PronType=Tot` |
| அனைத்தும் | aṉaittum | everything  | PRON | `PronType=Tot|Gender=Neut` |
| ஒவ்வொருவரும் | ovvoruvarum | each person | PRON | `PronType=Tot|Animacy=Hum` |
| ஒவ்வொன்றும் | ovvoṉṟum | each thing | PRON | `PronType=Tot|Gender=Neut` |

---

# 2. Deixis

`Deixis` marks the relative location encoded in demonstratives. Tamil has a three-way deictic distinction:

```text
இ-  proximate / near speaker
உ-  medial / near hearer or intermediate
அ-  distal / remote
```

## Feature values used in Tamil

```text
Deixis=Prox   proximate
Deixis=Med    medial
Deixis=Remt   remote / distal
```

Example:

```text
உவன் வந்தான் .
uvaṉ vantāṉ
that.person.MED came
“That person came.”
```

Annotation:

```text
உவன்    PRON    PronType=Dem|Deixis=Med|Gender=Masc|Number=Sing|Person=3
```

Possible Tamil mapping:

| Form | Meaning | Feature |
|---|---|---|
| இவன் | this man / this person here | `Deixis=Prox` |
| உவன் | that person near you / medial person | `Deixis=Med` |
| அவன் | that man / that person there | `Deixis=Remt` |

---

# 3. NumType

`NumType` marks the type of numeral.

## Feature values used in Tamil

```text
NumType=Card   cardinal number
NumType=Ord    ordinal number
NumType=Dist   distributive
NumType=Frac   fraction
NumType=Mult   multiplicative
NumType=Range  numerical range
NumType=Sets   set/group numeral
```

Example:

```text
இரண்டு  நாய்கள் வந்தன .
iraṇṭu nāykaḷ vantaṉa
two    dogs   came
```

Annotation:

```text
இரண்டு    NUM    NumType=Card|NumForm=Word
```

---

# 4. NumForm

`NumForm` marks how the number is written.

## Feature values used in Tamil

```text
NumForm=Word    written as a word
NumForm=Digit   written as digits
NumForm=Roman   written as Roman numerals
```

Example:

```text
2 நாய்கள்  வந்தன
2 nāykaḷ vantaṉa
Two dogs came
```

Annotation:

```text
2    NUM    NumType=Card|NumForm=Digit
```

---

# 5. Poss

`Poss=Yes` is used for possessive forms.

Example:

```text
அவனுடைய புத்தகம் உள்ளது .
avaṉuṭaiya puttakam uḷḷatu
his book exists
“His book is there.”
```

Annotation:

```text
அவனுடைய    PRON    PronType=Prs|Poss=Yes|Gender=Masc|Number=Sing|Person=3
```

---

# 6. Reflex

`Reflex=Yes` is used when a pronoun refers back to the subject of the clause.

Example:

```text
அவன் தன்னை        பார்த்தான் 
avaṉ taṉṉai       pārttāṉ
he   himself-ACC  saw
He saw himself
```

Annotation:

```text
தன்னை    PRON    PronType=Prs|Reflex=Yes|Case=Acc|Number=Sing|Person=3
```

Do not mark every occurrence of **தான்** as reflexive. It may also function as an emphatic clitic.

---

# 7. Gender

`Gender` marks gender where it is morphologically or semantically relevant.

## Feature values used in Tamil

```text
Gender=Masc   masculine
Gender=Fem    feminine
Gender=Neut   neuter / non-rational
Gender=Com    common / honorific-human
```

Example:

```text
அவள் வந்தாள் .
avaḷ vantāḷ
she came
“She came.”
```

Annotation:

```text
அவள்       PRON       PronType=Prs|Gender=Fem|Number=Sing|Person=3
வந்தாள்      VERB      Tense=Past|VerbForm=Fin|Gender=Fem|Number=Sing|Person=3
```

---

# 8. Animacy

`Animacy` can be used to capture Tamil rational/non-rational distinctions.

## Recommended Tamil values

```text
Animacy=Anim   animate
Animacy=Inan   inanimate
```

Example:

```text
பையன் வந்தான் .
paiyaṉ vantāṉ
boy came
“The boy came.”
```

Annotation:

```text
பையன்    NOUN    Animacy=Anim
```

---

# 9. Number

`Number` marks singular or plural.

## Main Tamil values

```text
Number=Sing
Number=Plur
```

Example:

```text
பையன்கள்   வந்தார்கள் .
paiyaṉkaḷ vantārkaḷ
boys came
“The boys came.”
```

Annotation:

```text
பையன்கள்    NOUN    Number=Plur
```

---

# 10. Case

`Case` marks case on nouns, pronouns, proper nouns, and some nominalised forms.

## Common Tamil values


The following table lists common Tamil case values, possible suffixes, and examples. The exact surface form may vary because of sandhi, phonological changes, and stem alternations.

| Case | Function | Common suffixes / forms | Example | Gloss |
|---|---|---|---|---|
| `Case=Nom` | subject / citation form | zero marking | குமார் | Kumar-NOM |
| `Case=Acc` | direct object | -ஐ, -ை | ராமனை | Raman-ACC |
| `Case=Dat` | recipient, goal, experiencer | -க்கு, -க்கு, -இற்கு, -உக்கு | குமாருக்கு | Kumar-DAT |
| `Case=Gen` | possession / relation | -இன், -உடைய, -அது, -து | அவனுடைய | he-GEN |
| `Case=Loc` | location | -இல், -ல், -இடம் | வீட்டில் | house-LOC |
| `Case=Ins` | instrument / agent in passive-like clauses | -ஆல் | கத்தியால் | knife-INS |
| `Case=Com` | comitative / accompaniment | -உடன், -ஓடு, -ஒடு, -கூட | அவனுடன் | he-COM |
| `Case=Abl` | source / from | -இலிருந்து, -இருந்து, -கிடமிருந்து, -இடமிருந்து | வீட்டிலிருந்து | house-ABL |
| `Case=Ben` | benefactive / for | -க்காக, -ஆக | பையனுக்காக | boy-BEN |
| `Case=Voc` | address | vocative form, often zero or lengthened | அம்மா | mother-VOC |

Example:

```text
குமார் ராமனை பார்த்தான் .
kumār rāmaṉai pārttāṉ
Kumar Raman-ACC saw
“Kumar saw Raman.”
```

Annotation:

```text
ராமனை    PROPN    Case=Acc|Animacy=Hum|Gender=Masc|Number=Sing
```

Note: Tamil case suffixes are normally not tokenised separately. They are represented as morphological features on the nominal token.

Nowadays, case markers are also sometimes written separately as tokens. In such cases, they should be carefully analysed and annotated.

| Case | Independent case marker | Transliteration | Gloss | Possible UPOS | Feature |
|---|---|---|---|---|---|
| Dative | இற்கு | iṟku | DAT | PART | `Case=Dat` |
| Genitive | இன் | iṉ | GEN | PART | `Case=Gen` |
| Genitive | உடைய | uṭaiya | GEN | PART | `Case=Gen` |
| Locative | இடம் | iṭam | LOC / at | PART | `Case=Loc` |
| Instrumental | ஆல் | āl | INS / by | PART | `Case=Ins` |
| Instrumental | மூலம் | moolam | INS / by | PART | `Case=Ins` |
| Comitative | உடன் | uṭaṉ | COM / with | PART | `Case=Com` |
| Ablative | இலிருந்து | iliruntu | ABL / from | PART | `Case=Abl` |
| Ablative | இடமிருந்து | iṭamiruntu | ABL / from | PART | `Case=Abl` |

Example:

```text
சாவி மூலம் கதவைத் திறந்தான்
cāvi moolam katavait tiṟantāṉ
key using   door-ACC open-PST-3SG.M
He opened the door with a key
```

Possible annotation:

```text
ூலம்     ADP       Case=Ins
```

---

# 11. Definite

`Definite` may be used when indefiniteness or specificity is overtly marked.

## Possible values

```text
Definite=Ind    indefinite
Definite=Spec   specific
Definite=Def    definite, if clearly marked
```

Example:

```text
ஒரு குச்சியைக்   கொண்டு வா
oru kucciyai  koṇṭu  vā
one stick-ACC bring  come
Bring a stick
```

Annotation:

```text
ஒரு    NUM/DET    NumType=Card|Definite=Ind
```

Note: Tamil does not have articles like English. Use `Definite` cautiously, mainly where forms such as **ஒரு**, **ஏதேனும்**, or **குறிப்பிட்ட** clearly mark indefiniteness or specificity.

---

# 12. Degree

`Degree` is used for adjectives or adverbs when comparison or superlative meaning is encoded.

## Possible values

```text
Degree=Pos
Degree=Cmp
Degree=Sup
```

Example:

```text
ரோஜா மல்லிகையைவிட     அழகு 
rōjā mallikaiyaiviṭa  aḻaku
rose jasmine-ACC than beautiful
Rose is more beautiful than jasmine
```

Annotation:

```text
அழகு    ADJ    Degree=Cmp
```

Note: Tamil comparison is often expressed syntactically using **விட** “than”. Therefore, `Degree=Cmp` should be used only if the treebank policy treats the adjective as comparative in that construction.

---

# 13. AdpType

`AdpType` marks the type of adposition.

## Tamil value

```text
AdpType=Post
```

Example:

```text
அவன்போல    பேசினான்
அவன்  போல  பேசினான்
avaṉ  pōla  pēciṉāṉ
he    like  spoke
He spoke like him
```

Annotation:

```text
போல    ADP    AdpType=Post
```

Note: Many Tamil ADP-like forms may also function as nouns, adverbs, verbs, or subordinators. Assign `ADP` only after checking the context.

---

# 14. VerbForm

`VerbForm` marks the form of a verb.

## Values used in Tamil

```text
VerbForm=Fin    finite verb - முற்றுவினை 
VerbForm=Inf    infinitive - செய்ய எச்சம் 
VerbForm=Conv   converb - verbal participle / செய்து எச்சம் 
VerbForm=Vnoun  verbal noun - தொழிற்பெயர் 
```

Example:

```text
குமார்  வேலை முடிக்கவேண்டும்
குமார்  வேலை முடிக்க     வேண்டும்
kumār vēlai muṭikka   vēṇṭum
Kumar work  finish-INF must
“Kumar must finish the work.”
```

Annotation:

```text
முடிக்க    VERB    VerbForm=Inf
```

Note: Traditional Tamil **வினையெச்சம்** forms such as **செய்து**, **வந்து**, **பார்த்து** may be annotated in UD as `VerbForm=Conv`. In glosses for Tamil annotators, these can be labelled as `VRP`.

---

# 15. Mood

`Mood` marks verbal mood or modality.

## Common values for Tamil

Example:

```text
இந்த புத்தகத்தைக்     கொடுங்கள் .
inta puttakattaik koṭuṅkaḷ
this book-ACC     give-IMP.2PL
Give this book
```

Annotation:

```text
கொடுங்கள்    VERB    Mood=Imp|VerbForm=Fin|Person=2|Polite=Form
```

Note: Tamil modality is often expressed through auxiliaries or modal predicates such as **வேண்டும்**, **முடியும்**, **மாட்டேன்**, and **-லாம்**. Do not assign mood mechanically without checking the construction.

---

# 16. Tense

`Tense` marks tense on finite verbs and auxiliaries.

## Tamil values

```text
Tense=Past
Tense=Pres
Tense=Fut
```

Example:

```text
குமார்  இட்லியைச் சாப்பிட்டான்
kumār iṭliyaic cāppiṭṭāṉ
Kumar idli-ACC ate
Kumar ate idli
```

Annotation:

```text
சாப்பிட்டான்    VERB    Tense=Past|VerbForm=Fin|Person=3|Number=Sing|Gender=Masc
```

---

# 17. Aspect

`Aspect` may be used when aspectual meaning is morphologically or constructionally visible.

## Possible Tamil-relevant values

```text
Aspect=Prog   progressive
Aspect=Perf   perfect / completive
Aspect=Hab    habitual, if clearly marked
```

Example:

```text
அவன் படித்துக்கொண்டிருந்தான்
அவன் படித்து     கொண்டு   இருந்தான்
avaṉ paṭittuk koṇṭ      iruntāṉ
he   study     keep.VRB be-PST.3SG.M
He was studying
```

Possible annotation:

```text
கொண்டு      AUX    Aspect=Prog|VerbForm=Conv
இருந்தான்    AUX     Tense=Past|VerbForm=Fin|Person=3|Number=Sing|Gender=Masc
```

---

# 18. Voice

`Voice` marks voice distinctions.

## Tamil values

```text
Voice=Act
Voice=Pass
Voice=Cau    
```

Example:

```text
குமார்  அப்பாவால்    அடிக்கப்பட்டான்
குமார்  அப்பாவால்    அடிக்கப்    பட்டான்
kumār appāvāl    aṭikkap   paṭṭāṉ
Kumar father-INS beat-INF  undergo-PST-3SG.M
Kumar was beaten by his father
```

Annotation:

```text
பட்டான்    AUX    Voice=Pass|Tense=Past|VerbForm=Fin|Person=3|Number=Sing|Gender=Masc
```

---

# 19. Polarity

`Polarity` marks positive or negative polarity.

## Values

```text
Polarity=Neg
Polarity=Pos
```

Example:

```text
நான் விடமாட்டேன்
நான் விட     மாட்டேன்
nāṉ viṭa    māṭṭēṉ
I leave-INF will.not
I will not leave
```

Annotation:

```text
மாட்டேன்    AUX    Polarity=Neg|Person=1|Number=Sing|VerbForm=Fin
```

---

# 20. Person

`Person` marks first, second, or third person.

## Values

```text
Person=1
Person=2
Person=3
```

Example:

```text
நான்   வருகிறேன்
nāṉ   varukiṟēṉ
I     come-PRS-1SG
I am coming
```

Annotation:

```text
நான்         PRON    PronType=Prs|Person=1|Number=Sing
வருகிறேன்     VERB    Tense=Pres|VerbForm=Fin|Person=1|Number=Sing
```

---

# 21. Polite

`Polite` marks politeness, respect, or honorific status.

## Possible Tamil values

```text
Polite=Form   formal / honorific
Polite=Infm   informal
Polite=Elev   elevated honorific title
```

Example:

```text
மேதகு      தமிழக      முதலமைச்சர்       கொடி ஏற்றினார்.
mētaku     tamiḻaka  mutalamaiccar   koṭi ēṟṟiṉār
honourable Tamil.Nadu chief.minister flag hoist-PST.3SG.COM
‘The Honourable Chief Minister of Tamil Nadu hoisted the flag.
```

Annotation:

```text
மேதகு          ADJ    Polite=Elev
```

Note: Tamil honorific marking can override ordinary number/gender agreement. The annotation policy should define how to handle honorific plural forms used for a single person. Because, in the example above, it can also be written as ஏற்றினார்கள், where -கள் is a plural marker, but it also gives an additional honorific meaning.

---

# 22. Clusivity

`Clusivity` distinguishes inclusive and exclusive first-person plural pronouns.

## Tamil values

```text
Clusivity=In   inclusive we
Clusivity=Ex   exclusive we
```

Example:

```text
நாம்     செல்வோம் .
nām     celvōm
we.INCL go-FUT-1PL
“We will go.”
```

Annotation:

```text
நாம்    PRON    PronType=Prs|Person=1|Number=Plur|Clusivity=In
```

Suggested Tamil policy:

| Form | Feature |
|---|---|
| நாம் | `Clusivity=In` |
| நாங்கள் | `Clusivity=Ex` |

Note: This distinction should be verified in the corpus because actual usage may vary by dialect and register.

---

# 23. Foreign

`Foreign=Yes` is used for foreign words that are not integrated into Tamil.

Example:

```text
குமார்   பாஸ்ட்டாக ஓடினான் .
kumār  pāsṭṭāka ōṭiṉāṉ
Kumar  fast-ADV ran
“Kumar ran fast.”
```

Annotation:

```text
பாஸ்ட்டாக    ADV    Foreign=Yes
```

Note: Some loanwords such as **கார்** "Car", **பஸ்** "Bus", **டிவி** "TV", **சினிமா** "Cinema" and **மொபைல்** "Mobile" are now well integrated in Tamil usage. Thereore, it is upto the project to decide whether to mark them foreign or not. 

---

# 24. Abbr

`Abbr=Yes` is used for abbreviations.

Example:

```text
தி.மு.க.   ஆட்சியில்   உள்ளது
ti.mu.ka. āṭciyil   uḷḷatu
DMK       power-LOC exist
“DMK exists in power.”
```

Annotation:

```text
தி.மு.க.    PROPN    Abbr=Yes
```

---

# 25. Typo

`Typo=Yes` is used when a token contains an error that is preserved in the corpus.

Example:

```text
அவ்ன் வந்தான் .
avṉ vantāṉ
“He came.”
```

Annotation:

```text
அவ்ன்    PRON    Typo=Yes
```

---

# 26. PunctType

`PunctType` marks the type of punctuation.

## Common values

```text
PunctType=Peri   full stop
PunctType=Qest   question mark
PunctType=Excl   exclamation mark
PunctType=Comm   comma
PunctType=Quot   quotation mark
PunctType=Brck   bracket
```

Example:

```text
அவன் வந்தானா ?
avaṉ vantāṉā ?
Did he come ?
```

Annotation:

```text
?    PUNCT    PunctType=Qest
```

---

# 27. Sandhi

`Sandhi` is proposed as a Tamil-specific feature to record surface changes.

## Proposed values

```text
Sandhi=k  க் 
Sandhi=c  ச் 
Sandhi=t  த் 
Sandhi=p  ப் 
```


Tamil morphological analysis and syntactic annotation are often affected by sandhi, as sandhi may introduce restrictions on how words are segmented and interpreted. In some cases, sandhi markers may also indicate genitive-like relations, as in கதிரைக் கால் compared with கதிரை கால்.

```text
கதிரைக்           கால்
katirai-k        kāl
chair-GEN.SANDHI leg
‘the leg of the chair’

கதிரை   கால்
katirai kāl
chair   leg

```

Marking sandhi is also useful because, in contemporary writing, some writers do not consistently represent sandhi. Therefore, sandhi marking can provide valuable features for studying variation in Tamil texts, including changes across time, generations, genres and writing styles.


Note: Since `Sandhi` is not a core universal UD feature, the treebank should define it clearly as a Tamil-specific extension. 

---

Morphological annotation should be rich enough to support syntactic analysis. Annotators should not stop after identifying only UPOS or one obvious feature. Add all relevant features that are visible in the form and justified by the context.


