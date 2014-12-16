---
layout: feature
title: 'Animacy'
shortdef: 'animacy'
---

Similarly to [Gender](), animacy is
a lexical feature of [nouns](u-pos/NOUN) and inflectional
feature of other parts of speech that mark agreement with nouns. It is
independent of gender, therefore it is encoded separately in some
tagsets (e.g. all the Multext-East tagsets). On the other hand, in
Czech the (almost) only grammatical implications occur within the
masculine gender, which is why the PDT tagset does not have
animateness as separate feature and instead defines four genders:
masculine animate, masculine inanimate, feminine and neuter.

### `Anim`: animate

Human beings, animals, fictional characters, names of professions
etc. are all animate. Even nouns that are normally inanimate can be
inflected as animate if they are personified. For instance, consider a
children's story about cars where cars live and talk as people; then
the cars may become and be inflected as animates.

PDT examples of masculine animate nouns:

- _člověk&nbsp;_ “man”, _ministr&nbsp;_ “minister”, _prezident&nbsp;_ “president”, _předseda&nbsp;_ “chairman”, _ředitel&nbsp;_ “director”

### `Inan`: inanimate

Nouns that are not animate are inanimate.

PDT examples of masculine inanimate nouns:

- _rok&nbsp;_ “year”, _zákon&nbsp;_ “law”, _stát&nbsp;_ “state”, _případ&nbsp;_ “case”, _milión&nbsp;_ “million”
