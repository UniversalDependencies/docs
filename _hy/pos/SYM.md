---
layout: postag
title: 'SYM'
shortdef: 'symbol'
udver: '2'
---

### Definition

A symbol is a word-like entity that differs from ordinary words by form, function, or both.

Many symbols are or contain special non-alphanumeric characters, similarly to [punctuation](PUNCT). What makes them different from
punctuation is that they can be substituted by normal words. This involves all currency symbols, e.g. _֏ 75_ is identical to _յոթանասունհինգ դրամ_ "seventy-five armenian drams".

Mathematical operators form another group of symbols.

Another group of symbols is emoticons and emoji.

Strings that consists entirely of alphanumeric characters are not symbols but they may be [proper nouns](PROPN): _130XE_, _DC10_; others may be tagged `PROPN` (rather than `SYM`) even if they contain special characters: _ՏՈՒ-154Մ_ ("Tu-154M"). Similarly, abbreviations for single words are not symbols but are assigned the part of speech of the full form. For example, _պրն_ (պարոն "Mr.; Mister"), _կգ_ (կիլոգրամ "kg; kilogramm"), _կմ_ (կիլոմետր "km; kilometer") should be tagged [nouns](NOUN). Acronyms for proper names such as _ՄԱԿ_ "UN" and _ՆԱՏՕ_ "NATO" should be tagged as [proper nouns](PROPN).

Characters used as bullets in itemized lists _(•, ‣)_ are not symbols, they are punctuation.

### Examples

- _$, %, §, ©_
- _+, −, ×, ÷, =, <, >_
- :), ♥‿♥, 😝, ։Ճ
- _john.doe@universal.org, http://universaldependencies.org/, 1-800-COMPANY_
<!-- Interlanguage links updated Po 29. června 2026, 17:57:47 CEST -->
