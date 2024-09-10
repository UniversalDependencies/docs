---
layout: feature
title: 'Hyph'
shortdef: 'hyphenated compound or part of it'
udver: '2'
---

Boolean feature. Is this part of a hyphenated compound? Depending on
tokenization, the compound may be one token or be split to several
tokens; then the tokens need tags.

These are words corresponding to prefixes such `inter-` (inter disciplinary), `post-` (post traumatic), `un-` (un avoidable), `di-` (di transitive) and so on in English, but which are
relized as distinct tokens (without the hyphen) in different languages.

### <a name="Yes">`Yes`</a>: it is part of hyphenated compound

Note that this depends on the tokenization conventions used in the language.
For example, in Czech (see below), _česko-slovenský_ is tokenized as three
tokens: _česko_, the hyphen, and _slovenský_. While _slovenský_ is a normal
adjective in Czech, _česko_ is derived from an adjectival stem but it is in
a form that can never occur as a separate word. On the other hand, it can be
combined with many other adjectives denoting affiliation with a country or
region: _česko-moravský_, _česko-německý_, _česko-americký_ etc. If tokenization
left it as one token, it the whole word _česko-slovenský_ would be simply an
adjective and no `Hyph=Yes` would be used in the annotation.

#### Examples

* [cs] _<b>česko</b>-slovenský_ "<b>Czecho</b>-Slovak"
* [en] _<b>Anglo</b>-Saxon_

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:00 CEST -->
