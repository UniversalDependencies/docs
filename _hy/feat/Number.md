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
  <td><a href="#Sing">Sing</a></td>
</tr>
</table>

In Armenian, `Number` is a feature of [nouns](NOUN) and other parts of speech that mark agreement with nouns, i.e. personal [pronouns](PRON), and [verbs](VERB). 

Some geographical or biological/botanical names appear only in the plural form (e.g. _<b>Ալպեր</b>_ “The Alps”, _<b>Ապալաչներ</b>_ “Appalachian Mountains”, _<b>կատվազգիներ</b>_ “Felidae”, _<b>վարդազգիներ</b>_ “Rosaceae”) even though they denote one thing (semantic singular). We don’t mark these [proper nouns](PROPN) as `Ptan` (plurale tantum). Grammatically they behave like plurals, so `Plur` is obviously the back-off value here.

### <a name="Sing">`Sing`</a>: singular number

A singular noun denotes one person, animal or thing.

#### Examples:

* _<b>գիրք</b>_ “book”, _<b>լեռ</b>_ “mountain”, _<b>խնձոր</b>_ “apple”, _<b>գնացք</b>_ “train”

Pronouns that refer to a single person, an animal or a thing are also marked with this feature.

* _<b>Ես, ինքս, իմ; դու, ինքդ, քո; նա, ինքը, իր</b>_
* _I, myself, my; you, yourself, your; he, himself, his; she, herself, her; it, itself, its_

Demonstrative pronouns that refer to singular nouns, but not demonstrative determiners of singular or plural nouns (e.g. _<b>այս գիրքը/գրքերը</b>_ “this/these book/books”; _<b>այդ գիրքը/գրքերը</b>_ “that/those book/books (medial)”, _<b>այն գիրքը/գրքերը</b>_ “that/those book/books”), are also marked with this feature.

* _<b>սա</b>_ “this”
* _<b>դա</b>_ “that (medial)”
* _<b>նա</b>_ “that”
* _<b>այն</b>_ “that, it”

### <a name="Plur">`Plur`</a>: plural number

A plural noun denotes several persons, animals or things.

#### Examples:

* _<b>գրքեր</b>_ “books”, _<b>լեռներ</b>_ “mountains”, _<b>խնձորներ</b>_ “apples”, _<b>գնացքներ</b>_ “trains”

Pronouns that refer to several persons, animals or things are also marked with this feature.

* _<b>մենք, ինքներս, մեր; դուք, ինքներդ, ձեր; նրանք, ինքները, իրենց</b>_
* _we, ourselves, our; you, yourselves, your; they, themselves, their_

Demonstrative pronouns that refer to plural nouns, but not demonstrative determiners of singular or plural nouns (e.g. _<b>այս գիրքը/գրքերը</b>_ “this/these book/books”; _<b>այդ գիրքը/գրքերը</b>_ “that/those book/books (medial)”, _<b>այն գիրքը/գրքերը</b>_ “that/those book/books”), are also marked with this feature.

* _<b>սրանք</b>_ “these”
* _<b>դրանք</b>_ “those (medial)”
* _<b>նրանք</b>_ “those”

### <a name="Assoc">`Assoc`</a>: associative plural

In Armenian some nouns, proper nouns and pronouns appear in the plural form, which denotes constructions like ‘X and other people associated with X’. These plural forms consist of a noun X (typically of human reference, usually a person's name or a kin term) and one of the suffixes _<b>-ենք</b>_, _<b>-անք</b>_, _<b>-ոնք</b>_, _<b>-ունք</b>_.

As nominal syntactic subjects, associative plural forms are grammaticalty indefinte (even though they are known and concrete).

#### Examples:

* _<b>պապոնք</b>_ “the grandfather and other people associated with him”
* _<b>հայրիկենք</b>_ “the father and other people associated with him”
* _<b>իմոնք</b>_ “me and other people associated with me”
* _<b>մերոնք</b>_ “we and other people associated with us”
* _<b>քոնոնք</b>_ “you (`Sing`) and other people associated with you”
* _<b>ձերոնք</b>_ “you (`Plur`) and other people associated with you”
* _<b>Վարդանանք</b>_ “Vardan and other people associated with him”
* _<b>Արամենք</b>_ “Aram and other people associated with him”

### <a name="Coll">`Coll`</a>: collective / mass / singulare tantum

Collective or mass or singulare tantum is a special case of singular. It applies to words that use grammatical singular to describe sets of objects, i.e. semantic plural. Although in Armenian they are able to form plural. In practice the plural form means “several sorts of” or “several packages of”. We mark these forms as `Plur`.

#### Examples:

* _<b>մարդկություն</b>_ “mankind”
* _<b>գութ</b>_ “compassion”
* _<b>կաթ</b>_ “milk”
* _<b>պողպատ</b>_ “steel”
<!-- Interlanguage links updated Út zář 29 20:43:02 CEST 2020 -->
