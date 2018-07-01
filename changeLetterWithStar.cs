using System;
using System.Collections.Generic;
using System.Linq;

namespace test
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = 5;
            string str = "abbcccaaeeeeb bffffca ccab";
            List<char> liste = ChangeList(str, n);
            for (int i = 0; i < liste.Count; i++)
            {
                for (int j = 0; j < str.Length; j++)
                {
                    if (str[j] == liste[i]) str = ReplaceAt(str, j, '*');
                }
            }
            Console.Write(str);
            Console.ReadKey();
        }

        static List<char> ChangeList(string str, int n)
        {
            string newString = String.Concat(str.OrderBy(x => x)).Replace(" ", string.Empty); // Sırala boşlukları kaldır
            char root = newString[0]; // ilk harfi al
            int counter = 0;
            int index = 0;
            List<char> isChange = new List<char>();

            foreach (var letter in newString)
            {
                if (letter != root) // Sıralamada eşit olmadığı bir harf olursa 
                {
                    if (counter >= n)
                    {
                        isChange.Add(root);
                    }
                    root = letter; // Root değiştir
                    counter = 0;
                }
                if (root == letter) // Kök sıralamadaki eşit olduğu harf varsa 1 arttır
                {
                    counter++;
                }
            }
            return isChange;
        }

        static string ReplaceAt(string input, int index, char newChar)
        {
            char[] chars = input.ToCharArray();
            chars[index] = newChar;
            return new string(chars);
        }
    }
}
