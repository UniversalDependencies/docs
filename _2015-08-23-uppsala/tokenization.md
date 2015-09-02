---
layout: base
title:  'Uppsala Group on Tokenisation'
---

# Uppsala Group on Tokenisation

_(Chris Manning, Francis Tyers, Hèctor Martínez Alonso, Huner Kaşıkara, Aibek Makazhanov)_

# >1 token is 1 word

Here we define a token as a space delimited sequence of characters.

In CoNLL-U format, there is a restriction that "Fields must not contain space characters.".[1](http://universaldependencies.github.io/docs/format.html) This is problematic for a number of languages, as a word may consist of more than one token.

## Outcome

We came to the conclusion that the CoNLL-U format should allow multi-token words. The options were to use space itself,
another spacing character (e.g. ZWNJ) or to use some punctuation character (such as #, _, ⎵, etc.) The opinion of the group
was that as CoNLL-U format is tab-separated, it would not be problematic to allow spaces.

## Linguistic examples

### Vietnamese

"As a result of influence from the Chinese writing system, each syllable in Vietnamese is written separately as if it were a word. In the past, syllables in multisyllabic words were concatenated with hyphens, but this practice had died out, and hyphenation is now reserved for foreign borrowings."[2](https://en.wikipedia.org/wiki/Vietnamese_alphabet#Structure)

    Đảng  Cộng⎵sản  Việt⎵Nam
    Party Communist Vietnam

    Danh⎵sách      quốc⎵gia  xã⎵hội⎵chủ⎵nghĩa
    List.of.names  state     socialist

In a wordlist for Vietnamese extracted from Wiktionary,[3](https://svn.code.sf.net/p/apertium/svn/incubator/apertium-vie/dev/vie.speling.txt) over a third of headwords were multisyllabic.

### Tuvan

    Мен келген мен.
    I   come.PAST SG1

    Ол келген.
    He come.PAST SG3

    Мен келген-дыр     мен.
    I   come.PAST.EVID SG1

### Turkish

     Eve   geliyor      musun?
     Home  come.PROG    QST.SG2 ?

But:

     Eve   geldin         mi?
     Home  come.PAST.SG2  QST?

# 1 token is >1 word


## Question word

    (kaz) Нан бар ма?
    (kir) Нан барбы?
    (tat) Ипи бармы?
    (tyv) Хлеб бар бе? 
    (tur) Ekmek var mı?
    (chv) Çăкăр пур-и?

    "Bread existing [is] QST?", "Is there bread?"

For the Tatar and Kyrgyz examples we can use, for example:

    1       Нан       нан     NOUN
    2-3     барбы     _       _ 
    2       бар       бар     ADJ
    3       бы        бы      PART
    4       ?         ?       PUNCT

or:

    1       Нан       нан     NOUN
    2-3     барбы     _       _
    2       _         бар     ADJ
    3       _         бы      PART
    4       ?         ?       PUNCT


## Copula

    Мен  студентпен.
    I    student.COP.SG1 

    Onun tutkusu       spor     arabalardı.
    His  passion.SG3   sport's  car.PL.COP.PAST.SG3

We can separate the copula using:

    1    Onun         o        PRON
    2    tutkusu      tutku    NOUN
    3    spor         spor     NOUN
    4-5  arabalardı   _        _
    4    arabalar     araba    NOUN
    5    dı           i        AUX
    6    .            .        PUNCT

or:

    1    Onun         o        PRON
    2    tutkusu      tutku    NOUN
    3    spor         spor     NOUN
    4-5  arabalardı   _        _
    4    _            araba    NOUN
    5    _            i        AUX
    6    .            .        PUNCT

## Productive "derivations" (-DAGI, -NIKI, -LIK, -LI, -sIz)

The -DAGI suffix has been described well [here](https://github.com/UniversalDependencies/docs/issues/125).

    Ben mavi  arabadakileri      gördüm.
    I   blue  car.LOC.KI.PL.ACC  see.PAST.SG1
    "I see the ones in the blue car."

    Mavi arabadakiler        gazete         okuyor.
    Blue car.LOC.KI.PL.NOM   newspaper.ACC  read.PROG.3
    "The ones in the blue car read the newspaper."

The idea for these is to allow, for example:
 
    0     Ben             Ben      PRON     NUMBER=SG|PERSON=1|CASE=NOM
    1     mavi            mavi     ADJ      _
    2-3   arabadakileri   _        _        _
    2     _               araba    NOUN     CASE=LOC
    3     _               ki       X        NUMBER=PL|CASE=ACC
    4     gördüm          gör      VERB     TENSE=PAST|NUMBER=SG|PERSON=1
    
or:
 
    0     Ben             Ben      PRON     NUMBER=SG|PERSON=1|CASE=NOM
    1     mavi            mavi     ADJ      _
    2-3   arabadakileri   _        _        _
    2     arabada         araba    NOUN     CASE=LOC
    3     kileri          ki       X        NUMBER=PL|CASE=ACC
    4     gördüm          gör      VERB     TENSE=PAST|NUMBER=SG|PERSON=1

Depending on the language, recovering anything sensible for the sub-surface forms 
may be more or less difficult.

The -NIKI suffix (or in Turkish -NInki) works similarly to the -DAGI suffix, but for 
the genitive case.

    Ben  adamınkini      gördüm.
    I    man.GEN.KI.ACC  see.PAST.SG1
    "I saw the man's ones."   

The -LI morpheme creates attributives from bare noun phrases:

    Бир  палаталы     парламент
    One  chamber.LI   parliament
    "Unicameral parliament" (not "One-chamberly parliament")

The -LIK morpheme works similarly to the -LI morpheme.

The -sIz morpheme is sometimes called the abessive case, corresponding to the 
preposition 'without'. It could also be compared with the -less derivational 
morpheme in English. It creates attributive (like an adjective), adverbial or 
substantive phrases from a bare noun. Sometimes words with -sIz in can be lexicalised,
for example like "evsiz" (home.SIZ "homeless").

    Ол   хабарсыз  кетеді.
    He   news.SIZ  vanished
    "He vanished without news."

    Kayıt         belgesizlere         2 bin       TL ceza kesilecek.
    Registration  document.SIZ.PL.DAT  2 thousand  TL fine cut.PASS.FUT.
    "Those without registration documents will be fined 2,000 TL"

## Causative

    Babam           arabayı   Ali ustaya      yaptırmış
    Father.SG1      car.ACC   Ali master.DAT  fix.CAUS.EVID
    "My father made master Ali fix the car."

The thoughts were for this construction to use a separate relation, for example `nmod:caus` or `nsubj:caus` for 
the causative subject (causee) of a causative verb. 


