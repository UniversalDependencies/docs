---
layout: base
title:  'Uppsala Group on Tokenisation'
---

# Uppsala Group on Tokenisation

_(Chris Manning, Francis Tyers, Hèctor Martínez Alonso, Huner Kaşıkara, Aibek Makazhanov)_


# >1 token is 1 word

Here we define a token as a space delimited sequence of characters.

In CoNLL-U format, there is a restriction that "Fields must not contain space characters.".[http://universaldependencies.github.io/docs/format.html] This is problematic for a number of languages, as a word may consist of more than one token.

## Outcome

We came to the conclusion that the CoNLL-U format should allow multi-token words. The options were to use space itself,
another spacing character (e.g. ZWNJ) or to use some punctuation character (such as #, _, ⎵, etc.) The opinion of the group
was that as CoNLL-U format is tab-separated, it would not be problematic to allow spaces.

## Linguistic examples

### Vietnamese

"As a result of influence from the Chinese writing system, each syllable in Vietnamese is written separately as if it were a word. In the past, syllables in multisyllabic words were concatenated with hyphens, but this practice had died out, and hyphenation is now reserved for foreign borrowings." [https://en.wikipedia.org/wiki/Vietnamese_alphabet#Structure]

    Đảng  Cộng⎵sản  Việt⎵Nam
    Party Communist Vietnam

    Danh⎵sách      quốc⎵gia  xã⎵hội⎵chủ⎵nghĩa
    List.of.names  state     socialist

In a wordlist for Vietnamese extracted from Wiktionary,[https://svn.code.sf.net/p/apertium/svn/incubator/apertium-vie/dev/vie.speling.txt] over a third of headwords were multisyllabic.

### Tuvan

    Мен келген мен.
    I   come.PAST SG1

    Ол келген.
    He come.PAST SG3

    Мен келген-дыр     мен.
    I   come.PAST.EVID SG1

### Turkish

     Eve   geldi      misin?
     Home  come.PAST  QST.SG2 ?

# 1 token is >1 word


## Question word

   (kaz) Нан бар ма?
   (kir) Нан барбы?
   (tat) Ипи бармы?
   (tyv) Хлеб бар бе? 
   (tur) Ekmek var mı?
   (chv) Çăкăр пур-и?

   "Bread existing [is] QST?", "Is there bread?"

## Copula

   

## Productive "derivations" (-DAGI, -NIKI, -LIK, -LI, -SIZ)



## Causative


