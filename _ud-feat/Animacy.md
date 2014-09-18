---
layout: base
title: 'Animacy'
shortdef: 'animacy'
---

## {{ page.title }}: {{ page.shortdef }}

Similarly to <a href="Gender.html">Gender</a> (and to the African noun classes), animacy
is usually a lexical feature of <a href="../ud-pos/NOUN.html">nouns</a> and inflectional feature of
other parts of speech that mark agreement with nouns. It is
independent of gender, therefore it is encoded separately in some
tagsets (e.g. all the Multext-East tagsets). On the other hand, in
Czech the (almost) only grammatical implications occur within the
masculine gender, which is why the PDT tagset does not have
animateness as separate feature and instead defines four genders:
masculine animate, masculine inanimate, feminine and neuter.
We follow the two-feature approach used in Multext-East (many languages)
because it is safer.

Polish is special in that it also distinguishes grammatically
human vs. non-human animates. It can be demonstrated by inflection of
the example word <I>który</I>
(which) (boldface forms differ from the middle row):

|------------------------------------------------------------------------------------------------------------------------------------------------|
| gender            | sg-nom | sg-gen  | sg-dat  | sg-acc    | sg-ins | sg-loc | pl-nom     | pl-gen  | pl-dat | pl-acc      | pl-ins  | pl-loc  | 
|------------------------------------------------------------------------------------------------------------------------------------------------|
| animate human     | który  | którego | któremu | którego   | którym | którym | **którzy** | których | którym | **których** | którymi | których | 
| animate non-human | który  | którego | któremu | którego   | którym | którym | które      | których | którym | które       | którymi | których | 
| in-animate        | który  | którego | któremu | **który** | którym | którym | które      | których | którym | które       | którymi | których | 
|------------------------------------------------------------------------------------------------------------------------------------------------|
{: cellpadding="2" cellspacing="0" }

### Anim: animate

Human beings, animals, fictional characters, names of professions
etc. are all animate. Even nouns that are normally inanimate can be
inflected as animate if they are personified. For instance, consider
a children's story about cars where cars live and talk as people;
then the cars may become and be inflected as animates.

### Nhum: animate but non-human

Attested in Polish. In languages where Nhum is used, `Anim` is
restricted to human beings (complement of `Nhum`).

### Inan: inanimate

Nouns that are not
animate are inanimate. (If `Nhum` is used, nouns that are neither `Anim`
nor `Nhum` are `Inan`.)
