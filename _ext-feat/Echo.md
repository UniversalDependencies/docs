---
layout: feature
title: 'Echo'
shortdef: 'is this an echo word or a reduplicative?'
---

Is this a reduplicative or echo word? Such words occur in Hindi and
other Indian languages. In Hyderabad Dependency Treebank they get
their own part-of-speech tags RDP and ECH, respectively. We do not
want to treat them as separate parts of speech because they could be
assigned a POS independent of their RDP or ECH status (same as the
word that they echo). Perhaps we should merge this also with the
"hyph" feature to something called "compound"?

### Rdp: reduplicative

The word is a copy of a previous word. In Hindi, this would add the meaning of distribution ("one rupee each"), separation ("sit separately"), variety, diversity or just emphasis.

Examples: [hi] "कभी - कभी" = "kabhī - kabhī" = "sometimes", "कभी" =
"kabhī" = "sometimes"; "एक एक" = "eka eka" = "one each", "एक" = "eka"
= "one"

### Ech: echo

The word rhymes with a previous word but it is not identical to it and
typically it does not have any meaning of its own. In Hindi it
generalizes the meaning of the previous word and eventually translates
as "or something", "etc." etc.

Examples: [hi] "चाय वाय" = "čāya vāya" = "tea or something" (as in "Have some tea or something.")

For more details see Rupert Snell and Simon Weightman: Teach Yourself
Hindi, Section 16.4 and 16.5, pages 210 – 211.
