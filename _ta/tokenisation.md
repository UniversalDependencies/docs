## Multiword Tokenisation

UD annotation is based on syntactic words rather than purely orthographic words. Therefore, a single written Tamil form may sometimes need to be split into more than one syntactic word. This is especially relevant for forms involving clitics, auxiliaries, and certain postpositional elements.

Multiword tokenisation should be applied only when the separated elements are syntactically relevant. It should not be used to split every morphologically complex word. Annotators should follow the general UD principles on tokenisation and word segmentation before applying the Tamil-specific rules: https://universaldependencies.org/u/overview/tokenization.html

The example sentences used in this document are taken from the grammar books *A Grammar of Modern Tamil* by Thomas Lehmann and *Adippadai Tamil Ilakkanam* by M. A. Nuhman.

## Tokenisation Workflow

The input to the annotation process is a document or text file. As a first step, the text is divided into individual sentences through sentence tokenisation. Each sentence is then processed separately for word tokenisation.

In the initial stage of word tokenisation, tokens are usually identified by splitting the sentence at whitespace boundaries. Punctuation marks are also treated as separate tokens. Therefore, a space should be introduced before and after punctuation symbols such as:

```text
! ( ) - [ ] { } ; : ' " \ , < > . / ? @ # $ % ^ & * _ ~

For example:

```text
அவன் வந்தான்.
```

is tokenised as:

```text
அவன் வந்தான் .
```

However, this tokenisation is used only for annotation purposes. The original sentence form, without tokenisation changes or corrections, must be preserved and included in the sentence text (# text). Further, if there is no space between a token and the following punctuation mark in the original sentence, the feature `SpaceAfter=No` must be added to the preceding token. This marks that there is no space between the token and the following punctuation in the original text.

After this basic tokenisation, multiword tokens must be identified and split where necessary. This is a critical stage in Tamil UD annotation, because a single written form may contain more than one syntactic word. Such cases cannot be handled by simple whitespace- or punctuation-based tokenisation alone.

Multiword tokenisation requires careful linguistic analysis. Annotators should decide whether a surface form should be split by considering its syntactic function, morphological structure, and the UD guidelines. Some common cases include forms involving clitics, auxiliaries, postpositions, and particles.

## Multiword Tokens

In Tamil, spaces are normally used to separate tokens in a sentence. If two words are separated by a space, they are usually treated as different tokens. However, Tamil also has many surface forms where more than one linguistic unit is written together as a single orthographic word.

These forms may include noun-noun compounds, verb-verb compounds, verb-noun forms, and words with clitics. For example:

| Type | Example | Possible segmentation |
|---|---|---|
| Noun-noun compound | விசைப்படகு | விசை + படகு |
| Verb-verb compound | வந்துகொண்டிருக்கிறான் | வந்து + கொண்டு + இருக்கிறான் |
| Verb-noun form | செய்தவன் | செய்த + அவன் |
| Clitic attachment | அவனும் | அவன் + உம் |

Such forms may need to be split into multiple syntactic tokens depending on the context and the UD annotation principles. The purpose is not to split every compound word mechanically, but to identify cases where the parts function as separate syntactic units.

Multiword tokenisation is important because a single written Tamil word may contain information that corresponds to more than one syntactic word. If these forms are not split, it becomes difficult to assign accurate UPOS tags, morphological features, and dependency relations. It also affects cross-lingual comparison, because the same syntactic structure may be represented as separate words in another language. Therefore, careful multiword tokenisation helps make Tamil annotation more consistent, transparent, and comparable with other UD treebanks.

### MWE-01: Participial Nouns / வினையாலணையும் பெயர்

Participial nouns are forms that combine verbal and nominal properties. For example, **வந்தவன்** means “the one who came” or “the man who came”. It contains a verbal element, **வந்த** “came / who came”, and a nominal or pronominal element, **அவன்** “he / man”.

In UD annotation, these forms are treated as multiword tokens because they cannot be assigned a single UPOS category in a satisfactory way. The first part shows verbal behaviour, including tense information, while the second part shows nominal behaviour, such as reference to person, gender, number, and case-marking potential. Therefore, these forms should be tokenised into separate syntactic words.

This treatment is motivated by the mixed-category nature of such forms (https://kops.uni-konstanz.de/server/api/core/bitstreams/72c0aa32-7778-4f88-be85-79dcb3d4a0ba/content) : they show both verbal and nominal properties. For this reason, participial nouns should be split during multiword tokenisation.

| Surface form | Tokenisation | Gloss | Meaning |
|---|---|---|---|
| வந்தவன் | வந்த + அவன் | come-PST.RP + he/man | the man who came |
| வந்தவள் | வந்த + அவள் | come-PST.RP + she/woman | the woman who came |
| வந்தவர்கள் | வந்த + அவர்கள் | come-PST.RP + they/people | the people who came |
| வருகிறவர்கள் | வருகிற + அவர்கள் | come-PRS.RP + they/people | the people who come / are coming |

#### Example

```text
வருகிறவர்கள் மாணவர்கள்.
வருகிற அவர்கள் மாணவர்கள் .
வருகிற       அவர்கள்       மாணவர்கள்
come-PRS.RP  they/people   students
The people who are coming are students.
```

Participial nouns such as **வந்தவன்**, **வந்தவள்**, **வந்தவர்கள்**, **செய்தவன்**, and **படித்தவன்** should be tokenised as multiword tokens when the form contains both a relative participial/verbal element and a nominal or pronominal element. This tokenisation allows the verbal element to receive a verbal analysis and the nominal element to receive a nominal or pronominal analysis. 

### Multiword tokenisatoin of Clitics

#### [-um / -உம் clitic documentation](mwe-um-clitic.md)

#### [other clitics documentation](mwe-clitics.md)

### Multiword tokenisation of N+V and V+V compounds

#### [N+V and V+V documentation](mwe-nv-vv.md)

### Multiword Tokenisation of N+ADP

#### [Multiword Tokenisation of N+ADP](mwe-adp.md)

### Cases That Should Not Be Tokenised

#### [Cases That Should Not Be Tokenised](non-mwe.md)
