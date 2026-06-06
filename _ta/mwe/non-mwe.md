

## 1.0 Lexicalised ADV + Verb Forms

Some Tamil verbs may appear to contain an adverbial element plus a verb. For example, **முன்னேறு, பின்வாங்கு** can be understood as involving **முன்** “front / forward” and **ஏறு** “climb / rise”. However, in modern usage, **முன்னேறு** functions as a single lexical verb meaning “advance”, “progress”, or “move forward”.

Therefore, such forms should **not** be split during multiword tokenisation.

### Example

```text
அவன் வாழ்க்கையில்  முன்னேறினான்.
he   life-LOC   progress-PST-3SG.M
He progressed in life.
```

The form **முன்னேறினான்** should not be tokenised as:

```text
முன் + ஏறினான்
```

## 2.0 Noun + ஆக _āka_ / ஆன _āṉa_ Forms

Tamil has forms where a noun combines with **ஆக** / _āka_ or **ஆன** / _āṉa_ to form adverbial or adjectival expressions. These forms should usually **not be split during multiword tokenisation** as they function as lexicalised adverbs or adjectives.

### Noun + ஆக: Adverb Formation

The element **ஆக** / _āka_ can combine with a noun to form an adverbial expression.

Example:

```text
அவன் அமைதியாக பேசினான்
he   calmly    speak-PST-3SG.M
He spoke calmly


அமைதியாக    ADV
பேசினான்    VERB
```

The form **அமைதியாக** should not be split as:

```text
அமைதி + ஆக
```

More examples: அமைதியாக calmly, வேகமாக  quickly, அழகாக beautifully, தெளிவாக clearly, மெதுவாக slowly

### Noun + ஆன: Adjective Formation

The element **ஆன** / _āṉa_ can combine with a noun to form an adjectival expression.

Example:

```text
அவன் முக்கியமான   முடிவை         எடுத்தான்.
he   important  decision-ACC  take-PST-3SG.M
He took an important decision.

முக்கியமான    ADJ     amod
முடிவை        NOUN
```

The form **முக்கியமான** should not be split as:

```text
முக்கியம் + ஆன
```

More examples: அழகான beautiful, அமைதியான peaceful, தேவையான  necessary, சரியான  correct


## 3.0 Lexicalised V+V compounds

### Candidate Lexicalised V + V Forms

The following forms are some examaples for **lexicalised V + V forms** in many contexts. However, this classification should be verified carefully. These forms should not be split mechanically just because they appear to contain more than one verbal element. 

The best way to check whether a form is lexicalised is to consult a modern dictionary, such as the University of Madras (this is not a modern lexicon, but still useful) *Tamil Lexicon*, or Tamilcube, and to check how the form is actually used in a corpus.

| Candidate lexicalised form | Possible internal structure | Gloss | Meaning |
|---|---|---|---|
| கண்டுபிடி | கண்டு + பிடி | find/discover | discover |
| தேடிப்பிடி | தேடி + பிடி | search.and.find | findout |
| கலந்துகொள் | கலந்து + கொள் | participate | participate |
| ஒப்புக்கொள் | ஒப்பு + கொள் | accept/agree | accept |
| ஏற்றுக்கொள் | ஏற்று + கொள் | accept | accept |
| தெரிந்துகொள் | தெரிந்து + கொள் | come.to.know | learn / come to know |
| புரிந்துகொள் | புரிந்து + கொள் | understand | understand |
| அறிந்துகொள் | அறிந்து + கொள் | come.to.know | to become aware / learn |
| கற்றுக்கொள் | கற்று + கொள் | learn | to learn |
| காத்திரு | காத்து + இரு | wait | to wait |
| எழுந்திரு | எழுந்து + இரு | rise/get.up | to get up / rise |
| பதிவுசெய் | பதிவு + செய் | register/record | to register / record |
| முடிவுசெய் | முடிவு + செய் | decide | to decide |

#### Guideline

These forms should be treated as **example lexicalised forms**, not as automatically fixed cases. Annotators should check the context before deciding whether to split them.

For example:

```text
அவன் உண்மையைக்  கண்டுபிடித்தான்.
he   truth-ACC  discover-PST-3SG.M
He discovered the truth.
```

In this sentence, **கண்டுபிடித்தான்** functions as a single lexical verb meaning “discovered”. Therefore, it should not be split as:

```text
கண்டு + பிடித்தான்
```

However, annotators should always verify whether the form is lexicalised in the given context.

```text
1. Check whether the full form appears as a dictionary entry.
4. Check corpus examples to see how the form is used in real sentences, whether the internal verbs contribute separate syntactic meanings.
5. If the form behaves as a single lexical verb, do not split it.
6. If the internal parts function as separate syntactic units, and license different arguments, split it
```

#### Important Note 1

Dictionary evidence alone is not always enough. Some forms may be lexicalised in one context but compositional in another. Therefore, corpus evidence and sentence context are important.

The general rule is:

```text
Verify each case using dictionary evidence, corpus evidence, and sentence context.
Do not split them unless the internal verbal elements clearly function as separate syntactic units.
```

### Important Note 2:  on V + V Light-Verb-like Constructions

When there is a V+V construction it also should be checked for V+V light verb. If it is a V + V light verb, then it should be tokenised.


## 4.0 Lexicalised N+N compounds



