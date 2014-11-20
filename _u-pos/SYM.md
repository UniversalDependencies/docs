---
layout: postag
title: 'SYM'
shortdef: 'symbol'
---

### Definition

A symbol is a word-like entity that differs from ordinary words by
form, function, or both.

Many symbols are or contain special non-alphanumeric characters,
similarly to [punctuation](PUNCT).  What makes them different from
punctuation is that they can be substituted by normal words.  This
involves all currency symbols, e.g. _$ 75_ is identical to
_seventy-five dollars_.

Mathematical operators form another group of symbols.

Another group of symbols is emoticons and emoji.

Strings that consists entirely of alphanumeric characters are not
symbols but they may be [proper nouns](PROPN): _130XE_, _DC10_; others
may be tagged `PROPN` (rather than `SYM`) even if they contain special
characters: _DC-10_. Abbreviations of nouns (e.g., _km_ for kilometer,  _kg_ for kilogram, _M._ for Monsieur, _Dr_ for Doctor) are tagged as [nouns](NOUN).

Characters used as bullets in itemized lists _(•, ‣)_ are not symbols,
they are punctuation.

### Examples

- _$, %, §, ©_
- _+, −, ×, ÷, =, <, >_
- :), ♥‿♥, 😝
- _john.doe@universal.org, http://universaldependencies.github.io/docs/, 1-800-COMPANY_
