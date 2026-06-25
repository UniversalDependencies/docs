---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

### Definition

Pronouns are words that substitute for [nouns](NOUN) or noun phrases whose meaning is recoverable from the linguistic or extralinguistic context.

Pronouns under this definition function like nouns. Note that Armenian grammar traditionally extends the term _pronoun_ to words that substitute for [adjectives](ADJ). Such words are not tagged `PRON`
under our universal scheme. They are tagged as [determiners](DET) in order to ensure parallel annotation across languages.

For instance, _այդ_/_ayd_ “that” is traditionally called a pronoun in Armenian grammar, regardless of context (for the notion of determiners in some Armenian grammars, terms exist like _attributive pronouns_ or _pronominal adjectives_). To ensure parallel annotation across languages, it should now be tagged `PRON` in _<b>Այդ</b> քո՞ մեքենան է։_/_<b>ayd</b> k’o mek’enan ē_ “Is <b>that</b> your car?” and `DET` in _Ես <b>այդ</b> մեքենան երեկ եմ տեսել։_/_es <b>ayd</b> mek’enan erek em tesel_ “I saw <b>that</b> car yesterday.”

Unlike traditional Western Armenian grammar, UD does not treat possessive pronouns as a separate subclass. Independent possessive forms (e.g. _իմս_/_ims_ “mine”, _քուկդ_/_k’owkd_ “yours”, _անորը_/_anorë_ “his/hers/its”, _մերը_/_merë_ “ours”, _ձերը_/_jerë_ “yours”, _անոնցը_/_anonc’ë_ “theirs”), which usually occur as independent nominals, are annotated as personal pronouns, with their possessive meaning encoded by the feature `Poss=Yes`.

### Examples

- personal pronouns: _ես_/_es_ “I”, _դուն_/_down_ “you”, _ան_/_an_ “he/she/it”, _մենք_/_menk’_ “we”, _դուք_/_dowk’_ “you”, _անոնք_/_anonk’_ “they”
- demonstrative pronouns: _ասիկա_/_asika_ (_այս_/_ays_, _սա_/_sa_, _աս_/_as_) “this”, _ատիկա_/_atika_ (_այդ_/_ayd_, _ատ_/_at_) “that”, _անիկա_/_anika_ (_այն_/_ayn_, _ան_/_an_) “that”, _ասոնք_/_asonk’_ “these”, _ատոնք_/_atonk’_ “those”, _անոնք_/_anonk’_ “those” 
-	reciprocal pronouns:  _մէկզմէկ_/_mēkzmēk_ “one another”, _իրար_/_irar_ “one another, each other”
- interrogative pronouns: _ո՞վ_/_ov_ “who”, _ի՞նչ_/_inč_ “what”
- relative pronouns: _ով_/_ov_ “who”, _ինչ_/_inč_ “what”, _որ_/_or_ “who, which”
- indefinite pronouns: _մեկը_/_mekë_ “one, someone”, _ոմանք_/_omank’_ “some people”, _ուրիշը_/_owrišë_ “another one”
- emphatic pronouns: _ինքզինք_/_ink’zink’_ “(he) himself/(she) herself/(it) itself”
- total pronouns: _ամէնը_/_amēnë_ “all (of things)”, _ամէնքը_/_amēnk’ë_ “all (of people)”, _ամէն մէկը_/_amēn mēkë_ “everyone”, _ամէն ոք_/_amēn ok’_ “every person”, _ամէն ինչ_/_amēn inč_ “everything”, _բոլորը_/_bolorë_ “all (of people)”, _իւրաքանչիւրը_/_iwrak’ančiwrë_ “each one”, _իւրաքանչիւր ոք_/_iwrak’ančiwr ok’_ “each person”, _ողջը_/_oġǰë_ “the whole”, _ամբողջը_/_amboġǰë_ “the whole”
- negative pronouns: _ոչ ոք_/_oč ok’_ “nobody”, _ոչինչ_/_očinč_ “nothing”, _ոչ մէկը_/_oč mēkë_ “no one”
<!-- Interlanguage links updated St 6. května 2026, 20:42:05 CEST -->
