# How to Create SSH Keys and Use SCP to Transfer Files Remotely

# CREATING SSH KEY

**Step 1.**
Open Terminal on your local system (Windows/Linux).

**Step 2.**
Generate an SSH key pair. When prompted for a passphrase, you can choose to enter one for added security or leave it blank for passwordless login.

```bash
ssh-keygen
USING PUBLIC KEY FOR REMOTE LOGIN
Step 1.
Navigate to the .ssh directory in your home directory on your local machine.

Bash

cd ~/.ssh
Step 2.
Use scp to securely copy your public key (id_rsa.pub) to the remote server. Do not forget the colon : at the end of the remote path. You will be prompted for the remote user's password during this step.

Bash

scp id_rsa.pub ExamplePerson@remote_ip_address:
Enter the password for ExamplePerson on the remote machine when prompted.

Step 3.
Log in to the remote machine using ssh.

Bash

ssh ExamplePerson@remote_ip_address
Step 4.
Once you are logged into the remote machine, navigate to the .ssh directory. If it doesn't exist, create it.

Bash

# If the .ssh directory exists:
cd ~/.ssh

# Else, create the directory and then navigate into it:
mkdir ~/.ssh
cd ~/.ssh
Step 5.
Append the content of the uploaded public key (id_rsa.pub) to the authorized_keys file. This authorizes your public key for passwordless login in the future.

Bash

cat ~/id_rsa.pub >> authorized_keys
Step 6.
Now that your SSH key is authorized on the remote machine, you should be able to log in without a password.

Bash

ssh ExamplePerson@remote_ip_address


```
