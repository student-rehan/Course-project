package quiz.application;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Rules extends JFrame implements ActionListener{

    String name;
    JButton start, back;
    
    Rules(String name) {
        this.name = name;
        getContentPane().setBackground(Color.BLACK);
        getContentPane().setForeground(Color.BLACK);
        setLayout(null);
        
        JLabel heading = new JLabel("Welcome " + name + " to Tech Quiz");
        heading.setBounds(170, 30, 750, 50);
        heading.setFont(new Font("Viner Hand ITC", Font.BOLD, 35));
        heading.setForeground(new Color(30, 144, 254));
        heading.setForeground(Color.RED);
        add(heading);
        
        JLabel rules = new JLabel();
        rules.setBounds(20, 90, 700, 350);
        rules.setFont(new Font("Halion", Font.BOLD, 18));
        rules.setForeground(Color.YELLOW);
        rules.setText(
            "<html>"+ 
                "1. You are trained to be a programmer and not a story teller, answer point to point" + "<br><br>" +
                "2. You may have lot of options in life but here all the questions are compulsory" + "<br><br>" +
                "3. Crying is allowed but please do so quietly." + "<br><br>" +
                "4. Only a fool asks and a wise answers (Be wise, not otherwise)" + "<br><br>" +
                "5. Brace yourself, this paper is not for the faint hearted" + "<br><br>" +
            "<html>"
        );
        add(rules);
        
        back = new JButton("Register");
        back.setBounds(250, 500, 100, 40);
        back.setBackground(Color.WHITE);
        back.setForeground(Color.RED);
        back.addActionListener(this);
        add(back);
        
        start = new JButton("Start");
        start.setBounds(400, 500, 100, 40);
        start.setBackground(Color.WHITE);
        start.setForeground(Color.GREEN);
        start.addActionListener(this);
        add(start);
        
        setSize(800, 650);
        setLocation(350, 100);
        setVisible(true);
    }
    
    public void actionPerformed(ActionEvent ae) {
        if (ae.getSource() == start) {
            setVisible(false);
            new Quiz(name);
        } else {
            setVisible(false);
            new Login();
        }
    }
    
    public static void main(String[] args) {
        new Rules("User");
    }
}
