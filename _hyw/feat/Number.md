---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Assoc">Assoc</a></td>
  <td><a href="#Coll">Coll</a></td>
  <td><a href="#Plur">Plur</a></td>
  <td><a href="#Ptan">Ptan</a></td>
  <td><a href="#Sing">Sing</a></td>
</tr>
</table>

In Western Armenian, `Number` is a feature of [nouns](NOUN) and of parts of speech that agree with nouns, such as personal [pronouns](PRON) and [verbs](VERB). 

### <a name="Sing">`Sing`</a>: singular number

A singular noun denotes one person, animal, or thing.

#### Examples:

* _<b>գիրք</b>_/_girkʼ_ “book”, _<b>լեռ</b>_/_leṙ_ “mountain”, _<b>խնձոր</b>_/_xnjor_ “apple”, _<b>գնացք</b>_/_gnacʼkʼ_ “train”

Pronouns that refer to a single person, animal or thing are also marked with this feature.

* _<b>Ես, ինքս, իմ</b>_/<b>es, inkʼs, im</b> “I, myself, my”
* _<b>դու, ինքդ, քու</b>_/_dow, inkʼd, kʼow_ “you, yourself, your”
* _<b>ան, ինքը, իր</b>_/_na, inkʼë, ir_ “he, himself, his; she, herself, her; it, itself, its”

Demonstrative pronouns referring to singular entities are marked with this feature, whereas demonstrative determiners are not, regardless of whether the modified noun is singular or plural (e.g. _<b>այս գիրքը/գիրքերը</b>_/_ays girkʼë/girkʼerë_ “this book/books”; _<b>այդ գիրքը/գիրքերը</b>_/_ayd girkʼë/girkʼerë_ “that book/books (medial)”, _<b>այն գիրքը/գիրքերը</b>_/_ayn girkʼë/girkʼerë_ “that book/books”).

* _<b>աս</b>_/_as_ “this”
* _<b>ատ</b>_/_at_ “that (medial)”
* _<b>ան</b>_/_an_ “that”

### <a name="Plur">`Plur`</a>: plural number

A plural noun denotes several persons, animals, or things.

#### Examples:

* _<b>գիրքեր</b>_/_girkʼer_ “books”, _<b>լեռներ</b>_/_leṙner_ “mountains”, _<b>խնձորներ</b>_/_xnjorner_ “apples”, _<b>գնացքներ</b>_ “trains”

Pronouns that refer to several persons, animals or things are also marked with this feature.

* _<b>մենք, ինքներս, մեր</b>_/_menkʼ, inkʼners, mer_ “we, ourselves, our”
* _<b>դուք, ինքներդ, ձեր</b>_ “you, yourselves, your”
* _<b>նրանք, ինքները, իրենց</b>_ “they, themselves, their”

Demonstrative pronouns referring to plural entities, are marked with this feature, whereas demonstrative determiners are not, regardless of whether the modified noun is singular or plural (e.g. _<b>այս գիրքը/գրքերը</b>_/_ays girkʼë/grkʼerë_ “this book/books”; _<b>այդ գիրքը/գրքերը</b>_/_ayd girkʼë/grkʼerë_ “that book/books (medial)”, _<b>այն գիրքը/գրքերը</b>_/_ayn girkʼë/grkʼerë_ “that book/books”).

* _<b>սրանք</b>_/_srankʼ_ “these”
* _<b>դրանք</b>_/_drankʼ_ “those (medial)”
* _<b>նրանք</b>_/_nrankʼ_ “those”

### <a name="Ptan">`Ptan`</a>: plurale tantum

Some geographical or biological/botanical names appear only in the plural form even though they denote one thing (semantic singular). These [proper nouns](PROPN) are marked as `Ptan` (plurale tantum). Grammatically they behave like singulars, so `Ptan` is obviously the back-off value here.

#### Examples

* _<b>Ալպեր</b>_/_Alper_ “The Alps”
* _<b>Ապալաչներ</b>_/_Apalačner_ “Appalachian Mountains”
* _<b>կատվազգիներ</b>_/_katvazginer_ “Felidae”
* _<b>վարդազգիներ</b>_/_vardazginer_ “Rosaceae”

### <a name="Assoc">`Assoc`</a>: associative plural

In Armenian, some nouns, proper nouns and pronouns appear in the plural form that denote constructions like ‘X and other people associated with X’. These plural forms consist of a noun X (typically referring to humans, usually a person's name or a kin term) and one of the suffixes _<b>-ենք</b>_/_-enkʼ_, _<b>-անք</b>_/_-ankʼ_, _<b>-ոնք</b>_/_-onkʼ_, _<b>-ունք</b>_/_-ownkʼ_.

As nominal syntactic subjects, associative plural forms are grammatically indefinite (even though they are known and concrete).

#### Examples:

* _<b>պապոնք</b>_/_paponkʼ_ “the grandfather and other people associated with him”
* _<b>հայրիկենք</b>_/_hayrikenkʼ_ “the father and other people associated with him”
* _<b>իմոնք</b>_/_imonkʼ_ “me and other people associated with me”
* _<b>մերոնք</b>_/_meronkʼ_ “we and other people associated with us”
* _<b>քոնոնք</b>_/_kʼononkʼ_ “you (`Sing`) and other people associated with you”
* _<b>ձերոնք</b>_/_jeronkʼ_ “you (`Plur`) and other people associated with you”
* _<b>Վարդանանք</b>_/_Vardanankʼ_ “Vardan and other people associated with him”
* _<b>Արամենք</b>_/_Aramenkʼ_ “Aram and other people associated with him”

### <a name="Coll">`Coll`</a>: collective / mass / singulare tantum

Collective or mass or singulare tantum is a special case of singular. It applies to words that use grammatical singular to describe sets of objects, i.e. semantic plural. Although in Armenian they can form plural, in practice the plural form means “several sorts of” or “several packages of”. We mark these forms as `Plur`.

#### Examples:

* _<b>մարդկություն</b>_/_mardkowtʼyown_ “mankind”
* _<b>գութ</b>_/_gowtʼ_ “compassion”
* _<b>կաթ</b>_/_katʼ_ “milk”
* _<b>պողպատ</b>_/_poġpat_ “steel”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:04 CEST -->
