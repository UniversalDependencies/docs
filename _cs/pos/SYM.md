---
layout: postag
title: 'SYM'
shortdef: 'symbol'
udver: '2'
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
characters: _DC-10_.
Similarly, abbreviations for single words are not symbols but are assigned the part of speech
of the full form. For example, _Mr._ (mister), _kg_ (kilogram), _km_ (kilometr), _dr_ (doktor)
should be tagged [nouns](NOUN).
Acronyms for proper names such as _OSN_ and _NATO_ should be tagged as [proper nouns](PROPN).

Characters used as bullets in itemized lists _(•, ‣)_ are not symbols,
they are punctuation.

### Examples

- _$, %, §, ©_
- _+, −, ×, ÷, =, <, >_
- :), ♥‿♥, 😝
- _john.doe@universal.org, http://universaldependencies.org/, 1-800-COMPANY_

## Diffs

### Prague Dependency Treebank

The PDT texts are from the early 1990s and there are no e-mail addresses.
If they were there, the PDT tokenization rules would break them up on all dots and at signs.
The same holds for telephone numbers. For example,
_tel.: (05) 4321 6014&nbsp;_ is analyzed as eight tokens (`NOUN PUNCT PUNCT PUNCT NUM PUNCT NUM NUM`).
<!-- Interlanguage links updated Út zář 29 20:42:58 CEST 2020 -->
