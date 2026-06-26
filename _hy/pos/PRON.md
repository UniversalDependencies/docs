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

For instance, _այդ_/_ayd_ “that” is traditionally called a pronoun in Armenian grammar, regardless of context (for determiners, some Armenian grammars use terms such as _attributive pronouns_ or _pronominal adjectives_). To ensure parallel annotation across languages, it is tagged `PRON` in _<b>Այդ</b> քո՞ մեքենան է։_/_<b>ayd</b> k’o mek’enan ē_ “Is <b>that</b> your car?” and `DET` in _Ես <b>այդ</b> մեքենան երեկ եմ տեսել։_/_es <b>ayd</b> mek’enan erek em tesel_ “I saw <b>that</b> car yesterday.”

Note that Armenian does not distinguish possessive pronouns as a separate subclass. Independent possessive forms (e.g. _իմը_/_imë_ “mine”, _քոնը_/_k’onë_ “yours”, _նրանը_/_nranë_ “his/hers/its”, _մերը_/_merë_ “ours”, _ձերը_/_jerë_ “yours”, _նրանցը_/_nranc’ë_ “theirs”) are annotated as personal pronouns, with their possessive meaning expressed by the feature `Poss=Yes`.

### Examples

- personal pronouns: _ես_/_es_ “I”, _դու_/_dow_ “you”, _նա_/_na_ “he/she/it”, _մենք_/_menk’_ “we”, _դուք_/_dowk’_ “you”, _նրանք_/_nrank’_ “they”
- demonstrative pronouns: _սա_/_sa_ “this”, _դա_/_da_ “that”, _նա_/_na_ “that”
-	reciprocal pronouns:  _մեկմեկու (մեկմեկի)_/_mekmekow (mekmeki)_ “one another”, _միմյանց_/_mimyanc’_ “each other”, _իրար_/_irar_ “one another, each other”
- interrogative pronouns: _ո՞վ_/_ov_ “who”, _ի՞նչ_/_inč_ “what” as in _<b>Ի՞նչ</b> ես կարծում։_/_<b>Inč</b> es karçowm._ “<b>What</b> do you think?”
- relative pronouns: _ով_/_ov_ “who”, _որ_/_or_ “that, which”, _ինչ_/_inč_ “what” as in _Արա, <b>ինչ</b> ուզում ես։_/_Ara, <b>inč</b> owzowm es_ “Do <b>whatever</b> you want.”
- indefinite pronouns: _մի քանիսը_/_mi k’anisë_ “several people/things”, _մեկը_/_mekë_ “one, someone”, _մեկնումեկը_/_meknowmekë_ “anyone”, _ոմանք_/_omank’_ “some people”, _ուրիշը_/_owrišë_ “another one”
- emphatic pronouns (when used with or related to the corresponding personal pronouns or nouns): _ինքը_/_ink’ë_ “(he) himself/(she) herself/(it) itself”, _իրենք_/_irenk’_ “(they) themselves”
- total pronouns: _ամենը_/_amenë_ “all (of things)”, _ամենքը_/_amenk’ë_ “all (of people)”, _ամեն մեկը_/_amen mekë_ “everyone”, _ամեն ոք_/_amen ok’_ “every person”, _ամեն ինչ_/_amen inč_ “everything”, _բոլորը_/_bolorë_ “all (of people)”, _յուրաքանչյուրը_/_yowrak’ančyowrë_ “each one”, _յուրաքանչյուր ոք_/_yowrak’ančyowr ok’_ “each person”, _ողջը_/_oġǰë_ “the whole”, _ամբողջը_/_amboġǰë_ “the whole”
- negative pronouns: _ոչ ոք_/_oč ok’_ “nobody”, _ոչինչ_/_očinč_ “nothing”, _ոչ մեկը_/_oč mekë_ “no one”
<!-- Interlanguage links updated St 6. května 2026, 20:42:05 CEST -->
